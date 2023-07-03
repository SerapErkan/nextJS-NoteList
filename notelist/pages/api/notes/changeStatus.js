import dbConnect from "@/database/db";
import noteModel from "@/models/noteModel";
import request from "@/services/request";

export default function handle(req, res) {


    request(res, async () => {
        dbConnect();
        const { id, isCompleted } = req.body;
        await noteModel.findOneAndUpdate(
            { _id: id },
            { isCompleted: !isCompleted },
        );

        res.json({ message: "Durumu başarıyla güncellendi!" });

    })



}


        // await Todo.findOneAndUpdate({ _id: req.body._id }, { isCompleted: !req.body.isCompleted });
        // await Todo.findOneAndUpdate(req.body);