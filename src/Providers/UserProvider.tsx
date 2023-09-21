import { createContext, useEffect, useState } from "react";
import { api } from "../axiosRequest/apiRequest";
import { useNavigate } from "react-router-dom";

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

interface IUSerContext {
  loginUser: (formData: ILoginFormData) => Promise<void>;
  registerUser: (formData: IRegisterFormData) => Promise<void>;
  user: IUserData | null;
  logout: () => void;
}

interface IUserData {
  name: string;
  email: string;
  id: number;
}

interface IUserResponseLogin {
  accessToken: string;
  user: IUserData;
}
interface IUserResponseRegister {
  user: IUserData;
  acessToken: string;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as IUSerContext);
UserContext.Provider;

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const navigate = useNavigate();
  const loginUser = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<IUserResponseLogin>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id.toString());
      navigate("/shop");
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (formData: IRegisterFormData) => {
    try {
      await api.post<IUserResponseRegister>("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
  };
  useEffect(() => {
    const autoLogin = async () => {
      const userID = localStorage.getItem("@USERID");
      const token = localStorage.getItem("@TOKEN");
      try {
        if (userID && token) {
        const response = await api.get<IUserData>(`/users/${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },

        });
        navigate("/shop");
      }else{
        navigate("/")
      }
      } catch (error) {
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@TOKEN");
        navigate("/")

      }
    };
    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, registerUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
