const skills = [
    {name: "html", porcentagem: "84%"},
    // {name: "next", porcentagem: "10%"},
    {name: "vue", porcentagem: "50%"},
    {name: "react", porcentagem: "90%"},
    {name: "nest", porcentagem: "68%"},
    {name: "sass", porcentagem: "50%"},
    {name: "node", porcentagem: "65%"},
    // {name: "javascript", porcentagem: "50%"},
    {name: "typescript", porcentagem: "50%"},
    {name: "css", porcentagem: "85%"},
]

skills.map((item) => {
    $(".skills").append(`
    <div>
        <div style="font-size: 12px; text-transform: uppercase;"><b>${item.name}</b></div>
        <div class="bar-out">
            <div style="width: ${item.porcentagem} "class="inside-bar"></div>
        </div>
    </div>
    `)
})

$(".logo-discord").click(() => {
    window.open("https://discord.gg/CjbzggEerU");
})

$(".logo-linkedin").click(() => {
    window.open("https://www.linkedin.com/in/vinicius-benfica/");
})

$(".logo-instagram").click(() => {
    window.open("https://www.instagram.com/vb_benfica/");
})

$(".logo-github").click(() => {
    window.open("https://github.com/ViniciusBenfica/");
})

$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if(scroll >= 500){
        $(".about").fadeIn()
        $(".inside-bar").show()
        $(".inside-bar").addClass("animation-inside-bar")
    }
});

$(".see-more").click(() => {
    var scroll = $("section").height()
    window.scrollTo({top: scroll, behavior: 'smooth'})
})