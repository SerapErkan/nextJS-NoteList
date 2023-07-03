import dbConnect from "@/database/db";
import noteModel from "@/models/noteModel";
import request from "@/services/request";
import { v4 as uuidv4 } from 'uuid';

export default function handle(req, res) {
    request(res, async () => {
        dbConnect();

        const { note } = req.body;

        let date = new Date();
        date.setHours(new Date().getHours() + 3);

        const addNote = new noteModel({
            _id: uuidv4(),
            note: note,
            isCompleted: false,
            date: date
        });

        await addNote.save();
        //işlemler
        res.json({ message: "Kayıt işlemleri başarıyla tamamlandı ! " });
    })



}