import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Truck,
  Shield,
  AlertCircle
} from "lucide-react";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const colors = {
    primary: "#f94735",
    secondary: "#0e1d34",
  };

  // Demo credentials (in real app, check with backend)
  const validCredentials = {
    email: "admin@logistics.com",
    password: "admin123"
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email === validCredentials.email && formData.password === validCredentials.password) {
        toast.success("Login successful! Redirecting...");
        // Store auth token
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify({ email: formData.email, role: "admin" }));
        // Redirect to admin dashboard
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 1000);
      } else {
        toast.error("Invalid email or password");
        setErrors({ ...errors, general: "Invalid email or password" });
      }
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230e1d34' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-2xl p-8 z-10">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: colors.secondary }}>
              <Truck className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold" style={{ color: colors.secondary }}>
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your admin account
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* General Error */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-sm text-red-600">{errors.general}</span>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  errors.email 
                    ? "border-red-500 focus:ring-red-500" 
                    : "border-gray-300 focus:ring-[#f94735] focus:border-[#f94735]"
                }`}
                placeholder="admin@logistics.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  errors.password 
                    ? "border-red-500 focus:ring-red-500" 
                    : "border-gray-300 focus:ring-[#f94735] focus:border-[#f94735]"
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 focus:ring-[#f94735]"
                style={{ accentColor: colors.primary }}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="hover:underline" style={{ color: colors.primary }}>
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white font-medium transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ backgroundColor: colors.primary }}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing in...
              </div>
            ) : (
              "Sign in"
            )}
          </button>

          {/* Demo Credentials */}
         
          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium hover:underline" style={{ color: colors.primary }}>
              Contact Super Admin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;