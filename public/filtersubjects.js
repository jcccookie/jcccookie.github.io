function filterClassesBySubject() {
   var subjectId = document.getElementById('filterSubject').value;
   window.location = '/search/filter/' + parseInt(subjectId);
}
