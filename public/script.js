document.querySelector('#download-btn').addEventListener('click', async () => {
    let videoURL = document.querySelector('#video-url').value;

    if (videoURL.length < 1) {
        return alert('Enter url dumbass!');
    }

    let res = await axios({
        method: 'GET',
        responseType: 'json',
        url: `http://localhost:5000/download?videoURL=${videoURL}`,
    });

    if (res.data.status == 'success') {
        let videoRes = await axios({
            method: 'GET',
            responseType: 'blob',
            url: res.data.link
        });

        download(new Blob([videoRes.data]), 'video.mp4');
    } else {
        alert('Something went wrong!');
    }
});