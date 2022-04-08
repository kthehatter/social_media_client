export async function handleRecievedCall(callType) {
  try {
    let currentStream;
    if (callType === "video") {
      currentStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    } else {
     currentStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    }
    return currentStream;
  } catch (err) {
    console.log(err);
  }
}
