import React, { useState } from "react";
import { TextField, Button, Box, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ import from react-router-dom

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // ✅ correct hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.message) tempErrors.message = "Message is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email address";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // example navigation after submission:
      // navigate("/success");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 1, width: 300 }}
    >
      <Typography
              variant="h5"
              fontWeight="bold"
              color="primary" mt={4} ml={2}
            >
              Contact Me
            </Typography>

      <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}> 
        <TextField
        label="Name"
        name="name"
        size="small"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        mt={4} ml={2}
      />

      <TextField
        label="Email"
        name="email"
        size="small"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        label="Phone Number"
        name="phone"
        size="small"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
      />

      <TextField
        label="Message"
        name="message"
        size="small"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
      />
      </Card>

      <Box mt={4} display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#f57c00",
            color: "#fff",
            px: 3,
            py: 1.5,
            borderRadius: 10,
          }}
          onClick={() => navigate("/projects")} // ✅ now works
        >
          Send Message
        </Button>

        {/* Example of second button if needed */}
        {/* 
        <Button
          variant="outlined"
          sx={{
            borderColor: "#f57c00",
            color: "#f57c00",
            px: 3,
            py: 1.5,
            borderRadius: 10,
          }}
          onClick={() => navigate("/resume")}
        >
          Download Resume (PDF)
        </Button> 
        */}
      </Box>
    </Box>
  );
}
