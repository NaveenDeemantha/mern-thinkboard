import express from "express";
import {getAllNotes} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", (req, res) =>{
    res.status(200).send("You just fetched the Notes");
});

router.post("/", (req,res) => {
    res.status(200).send("Note created Successfully !");
})

router.put("/:id", (req,res) => {
    res.status(200).send.json({message:"Note updated Successfully !"})
})

router.delete("/:id", (req,res) => {
    res.status(200).send.json({message:"Note deleted Successfully !"})
})

export default router;




