const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-video-botao]");
const video = document.querySelector("[data-video]");

botaoIniciarCamera.addEventListener("click", async function () {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  botaoIniciarCamera.style.display = "none";
  campoCamera.style.display = "block";

  video.srcObject = iniciarVideo;
});
