import React, { useContext } from "react";
import { AuthContext, useEffect } from "../../../contexts/AuthContext";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Container, Input, LinkText } from "./RegisterScreen.styles";
import { Formik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

// Schema para validar os campos com Yup
const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  name: Yup.string().min(2, "Short entry").required("Name required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password required"),
});

export default function RegisterScreen({ navigation }) {
  const { register, loading } = useContext(AuthContext);
  const [submitAttempted, setSubmitAttempted] = React.useState(false);

  // função que chama o serviço de registro
  const handleRegister = async (values, { setSubmitting }) => {
    try {
      const result = await register(values.name, values.email, values.password);
      console.log("Resultado do register:", result);

      if (result.success) {
        Toast.show({
          type: "success",
          text1: "Registration completed!",
          position: "top",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Registration failed",
          position: "top",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error during registration",
        position: "top",
      });
      console.error("Registration failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{ email: "", name: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => {
          // useEffect para mostrar toast com erro sempre que o form for submetido e erros existirem
          React.useEffect(() => {
            if (submitAttempted) {
              Object.values(errors).forEach((errorMessage) => {
                if (errorMessage) {
                  Toast.show({
                    type: "error",
                    text1: errorMessage,
                    position: "top",
                  });
                }
              });
            }
          }, [errors, submitAttempted]);

          const onPressSubmit = () => {
            setSubmitAttempted(true);
            handleSubmit();
          };

          return (
            <>
              <Input
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              <Input
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry
              />
              <PrimaryButton
                title={isSubmitting ? "Registering..." : "Register"}
                onPress={onPressSubmit}
                disabled={isSubmitting || loading}
              />
              <LinkText onPress={() => navigation.navigate("Login")}>
                Already have an account? Login
              </LinkText>
            </>
          );
        }}
      </Formik>
    </Container>
  );
}
