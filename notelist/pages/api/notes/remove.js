import dbConnect from "@/database/db";
import noteModel from "@/models/noteModel";
import request from "@/services/request";

export default async function handle(req, res) {

    request(res, async () => {
        dbConnect();
        await noteModel.findOneAndRemove(req.body);
        res.json({ message: "Kayıt başarıyla silindi!" });
    })



}