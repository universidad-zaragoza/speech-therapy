import axios from "axios";

const useWebCam = () => {
  const sendImageToServer = async (_imgBase64: string) => {
    try {
      const response = await axios.post(
        "https://speech-therapy-server.onrender.com/webcam/upload",
        {
          image: _imgBase64,
        }
      );
      console.log("Imagen enviada correctamente al servidor");

      const imageUrl: string = response.data.imageUrl;
      console.log("Resultado recibido del servidor:", imageUrl);
      downloadImageFromBase64(imageUrl, "imagen.jpg");
    } catch (error) {
      console.error("Error al enviar la imagen al servidor:", error);
    }
  };

  const downloadImageFromBase64 = (
    base64Data: string,
    fileName: string
  ): void => {
    const base64DataNormalized: string = base64Data.split(",")[1];

    // Convertir la cadena base64 a datos binarios
    const byteCharacters: string = atob(base64DataNormalized);
    const byteNumbers: number[] = new Array(byteCharacters.length);
    for (let i: number = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray: Uint8Array = new Uint8Array(byteNumbers);

    // Crear un objeto Blob con los datos binarios
    const blob: Blob = new Blob([byteArray], { type: "image/jpeg" });

    // Crear una URL de objeto para el Blob
    const url: string = URL.createObjectURL(blob);

    // Crear un enlace temporal para descargar la imagen
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = url;
    link.download = fileName; // Nombre de archivo sugerido
    link.click();

    // Liberar la URL de objeto después de la descarga
    URL.revokeObjectURL(url);
  };

  return { sendImageToServer };
};

export default useWebCam;
