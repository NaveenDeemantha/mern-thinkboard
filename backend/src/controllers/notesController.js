export function getAllNotes (req, res) {
    res.status(200).send("You Just fetched the notes");
}

export function createNote (req, res) {
    res.status(200).send("Note created Successfully !");
}

export function updateNote (req, res) {
    res.status(200).send.json({message:"Note updated Successfully !"})
}

export function deleteNote (req, res) {
    res.status(200).send.json({message:"Note deleted Successfully !"})
}