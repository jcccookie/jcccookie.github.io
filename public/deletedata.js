// admin page
function deleteClass(id){
    $.ajax({
        url: '/admin/class/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
 };

function deleteStudent(id){
   $.ajax({
       url: '/admin/student/' + id,
       type: 'DELETE',
       success: function(result){
           window.location.reload(true);
       }
   })
};

function deleteAccount(id){
    $.ajax({
        url: '/admin/account/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
 };

function deleteSubject(id){
    $.ajax({
        url: '/admin/subject/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
 };

 function deleteTerm(id){
    $.ajax({
        url: '/admin/term/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
 };

 // class page
 function deleteClassById(cid, aid){
    $.ajax({
        url: '/classes/search/cid/' + cid + '/aid/' + aid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
 };