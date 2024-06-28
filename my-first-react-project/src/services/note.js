import axios from "axios"

export const fetchNotes = async (filter, page) => {
    try {
        var resposne = await axios.get("http://localhost:5291/notes", {
                params: {
                    search: filter?.search,
                    sortItem: filter?.sortItem,
                    sortOrder: filter?.sortOrder,
                    page: page
                },
                });
        
        return resposne.data;
    }
    catch (e) {
        console.error(e);
    }

}

export const createNote = async (note) => {
    try {
        var resposne = await axios.post("http://localhost:5291/notes", note);        
        return resposne.status;
    }
    catch (e) {
        console.error(e);
    }

}

export const updateNote = async (note) => {
    try {
        var resposne = await axios.put("http://localhost:5291/notes/" + note.id, note);        
        return resposne.status;
    }
    catch (e) {
        console.error(e);
    }

}

export const deleteNote = async (noteId) => {
    try {
        var resposne = await axios.delete("http://localhost:5291/notes/" + noteId);        
        return resposne.status;
    }
    catch (e) {
        console.error(e);
    }

}