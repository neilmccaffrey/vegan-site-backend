import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendRecipeSubmission = async (req, res) => {
  const { recipeName, ingredients, instructions, servings, credit } = req.body;

  if(!recipeName.trim() || !ingredients.trim() || !instructions.trim() || !servings.trim()){  
      return res.status(400).json({ message: 'All fields except credit are required' });
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Recipe Submission ${recipeName}`,
    text: `
      Recipe Name: ${recipeName}
      
      Ingredients:
      ${ingredients}
      
      Instructions:
      ${instructions}
      
      Servings: ${servings}
      
      Recipe Credit: ${credit}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Recipe submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
};