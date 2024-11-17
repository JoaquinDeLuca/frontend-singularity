export interface AuthContextType {
    auth: string | null;
    login: (token: string) => void;
    logout: () => void;
}