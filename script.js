document.addEventListener("DOMContentLoaded", function () {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");

    if (toastTrigger) {

        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        const Heading = document.getElementById("toast-notif-Head");
        const Body = document.getElementById("toast-notif-Body");

        toastTrigger.addEventListener("click", () => {
            toastBootstrap.show();
            Heading.innerText = "Hang tight";
            Body.innerText = "You will be redirected shortly.";
        });

    }
});

function redirect() {
    setTimeout(function() {
        window.location.href = "https://drive.google.com/file/d/1ypS2WgNLM5anat13a7xB93-G8yqXQuWT/preview";
    }, 4250);
}