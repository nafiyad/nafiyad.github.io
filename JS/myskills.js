// to animate the skills bars
function animateSkills() {
    var skills = document.querySelectorAll('.skill-bar');
    skills.forEach(function(skill) {
        var value = skill.getAttribute('data-skill-value');
        skill.style.width = value;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
});
