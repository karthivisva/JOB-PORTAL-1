import React from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-blue-600">Register</h1>
          <div className="my-2">
            <Label>Name</Label>
            <Input type="text" placeholder="John Doe"></Input>
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="johndoe@gmail.com"></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="********"></Input>
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="tel" placeholder="+1234567890"></Input>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5 ">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            <Label>Profile Photo</Label>
            <Input type="file" accept="image/*" className="cursor-pointer" />
          </div>
          <button className="block w-full py-3 my-3 text-white bg-primary hover:bg-primary/90 rounded-md">
            Register
          </button>
          {/* already account then login */}
          <p className="text-gray-500 text-md my-2">
            Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
