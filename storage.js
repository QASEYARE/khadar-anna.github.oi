        let notes = [];
        let currentNoteIndex = -1;
        let undoStack = [];

        document.addEventListener('DOMContentLoaded', function () {
            loadNotesFromStorage();
            displayNotes();
        });

        function addNote() {
            const noteInput = document.getElementById('noteInput');
            const noteText = noteInput.value.trim();

            if (noteText !== '') {
                const note = { text: noteText, timestamp: new Date().toISOString() };
                notes.push(note);
                saveNotesToStorage();
                displayNotes();
                noteInput.value = '';
            }
        }

        function displayNotes() {
            const noteList = document.getElementById('noteList');
            noteList.innerHTML = '';

            notes.forEach((note, index) => {
                const li = document.createElement('li');
                li.className = 'note';
                li.textContent = `${note.text} - ${new Date(note.timestamp).toLocaleString()}`;
                li.onclick = () => selectNote(index);
                noteList.appendChild(li);
            });
        }

        function selectNote(index) {
            currentNoteIndex = index;
            const selectedNote = notes[currentNoteIndex];
            const noteTextarea = document.getElementById('noteTextarea');
            noteTextarea.value = selectedNote.text;
        }

        function saveEdit() {
            if (currentNoteIndex !== -1) {
                const noteTextarea = document.getElementById('noteTextarea');
                const editedText = noteTextarea.value.trim();
                if (editedText !== '') {
                    const editedNote = { text: editedText, timestamp: new Date().toISOString() };
                    notes[currentNoteIndex] = editedNote;
                    saveNotesToStorage();
                    displayNotes();
                    clearEditArea();
                }
            }
        }

        function undoEdit() {
            if (undoStack.length > 0) {
                const lastEdit = undoStack.pop();
                notes[currentNoteIndex] = lastEdit;
                saveNotesToStorage();
                displayNotes();
                selectNote(currentNoteIndex);
            }
        }

        function deleteNote() {
            if (currentNoteIndex !== -1) {
                notes.splice(currentNoteIndex, 1);
                saveNotesToStorage();
                displayNotes();
                clearEditArea();
                
            
            }
        }

        function saveNotesToStorage() {
            localStorage.setItem('notes', JSON.stringify(notes));
           
        }

        function loadNotesFromStorage() {
            const storedNotes = localStorage.getItem('notes');
            notes = storedNotes ? JSON.parse(storedNotes) : [];
        }

        function clearEditArea() {
            currentNoteIndex = 0;
            const noteTextarea = document.getElementById('noteTextarea');
            noteTextarea.value = '';
        }
        function message() {

    const storedNotes = localStorage.getItem('notes'); 

    const noteMessage = document.getElementById('message');

    const notes = storedNotes ? JSON.parse(storedNotes) : [];

    noteMessage.value = 'Save successful';
}

       console.log(message); 
        
   