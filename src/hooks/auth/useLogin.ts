import { toast } from "sonner";
import { API } from "../../../api";

const useLogin = (url: string, loginContext: (token: string) => void) => {

    const login = async (data: Record<string, any>) => {
        try {
            const fetchAuth = await fetch(`${API}${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Verifico si la respuesta fue exitosa
            if (!fetchAuth.ok) {
                const response = await fetchAuth.json();
                toast.error(response?.error || "Error login");
                return;
            }

            const response = await fetchAuth.json();
            console.log(response);

            // Llamamos la función de contexto donde seteamos el token y redirigimos al home
            loginContext(response.token);
        } catch (err) {
            toast.error("An unexpected error occurred.");
            console.error("Error login:", err);
        }
    };

    return { login };
};

export default useLogin;
