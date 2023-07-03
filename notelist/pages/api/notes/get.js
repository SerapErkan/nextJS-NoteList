import dbConnect from "@/database/db";
import noteModel from "@/models/noteModel";
import request from "@/services/request";

export default function handle(req, res) {

    request(res, async () => {

        dbConnect();
        const notes = await noteModel.find({});
        res.json(notes);
    })



}

