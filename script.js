const skills = [
    {name: "html", porcentagem: "40%"},
    {name: "next", porcentagem: "10%"},
    {name: "vue", porcentagem: "56%"},
    {name: "react", porcentagem: "90%"},
    {name: "nest", porcentagem: "56%"},
    {name: "sass", porcentagem: "50%"},
    {name: "node", porcentagem: "50%"},
    // {name: "javascript", porcentagem: "50%"},
    {name: "typescript", porcentagem: "50%"},
    {name: "css", porcentagem: "50%"},
]

skills.map((item) => {
    $(".habilidades").append(`
    <div>
        <div class="name"><b>${item.name}</b></div>
        <div class="barra-fundo">
            <div style="width: ${item.porcentagem}"class="barra-dentro"></div>
        </div>
    </div>
    `)
})

$(".logo-discord").click(() => {
    window.location = "https://discord.gg/CjbzggEerU"
})
$(".logo-linkedin").click(() => {
    window.location = "https://www.linkedin.com/in/vinicius-benfica/"
})
$(".logo-instagram").click(() => {
    window.location = "https://www.instagram.com/vb_benfica/"
})
$(".logo-github").click(() => {
    window.location = "https://github.com/ViniciusBenfica/"
})

$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if(scroll >= 500){
        $(".barra-dentro").show()
        $(".barra-dentro").addClass("animation-inside-bar")
    }
});

$(".return-last-place").click(() => {
    window.scrollTo({top: 850, behavior: 'smooth'})
})
