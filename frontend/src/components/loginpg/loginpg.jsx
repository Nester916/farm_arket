import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link} from "react-router-dom";
import backgroundImage from './background.jpg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-6xl font-extrabold text-green-100 font-Caveat shadow-amber-600/50 text-shadow-lg">
              Hello Again!
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-slate-300 bg-opacity-70 py-8 px-4 shadow sm:rounded-3xl sm:px-10">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-slate-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-base font-medium text-slate-900"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-600 focus:border-lime-600 sm:text-sm"
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </div>
                </div>
                <div className={`${styles.normalFlex} justify-between`}>
                  <div className={`${styles.normalFlex}`}>
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="h-4 w-4 text-green-600 focus:ring-green-9-600 border-gray-300 rounded-lg"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-base text-gray-900 font-medium"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="text-base">
                    <a
                      href=".forgot-password"
                      className="font-medium text-lime-800 hover:text-lime-700 hover:text-shadow-lg shadow-lime-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-lime-700 hover:bg-lime-600">
                    Login
                  </button>
                </div>
                <div className={`${styles.normalFlex} w-full`}>
                  <h4 className="font-medium">New to Far-Market?</h4>
                  <Link to="/signup" className="font-medium text-lime-800 hover:text-lime-700 hover:text-shadow-lg shadow-lime-500 pl-2">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;