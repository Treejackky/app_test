const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/80', async (req, res) => {
  try {
    const startTime = Date.now();
    let secondsElapsed = 0;

    // สร้าง interval สำหรับ log ทุกวินาที
    const logInterval = setInterval(() => {
      secondsElapsed = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Waiting... ${secondsElapsed} seconds elapsed`);
    }, 1000);

    // รอ 90 วินาที
    await new Promise(resolve => setTimeout(resolve, 80000));

    // หยุด interval เมื่อเสร็จแล้ว
    clearInterval(logInterval);

    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Completed! Total time: ${totalTime} seconds`);

    res.send({
      message: 'All Emails Have Been Sent',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});


app.get('/100', async (req, res) => {
  try {
    const startTime = Date.now();
    let secondsElapsed = 0;

    // สร้าง interval สำหรับ log ทุกวินาที
    const logInterval = setInterval(() => {
      secondsElapsed = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Waiting... ${secondsElapsed} seconds elapsed`);
    }, 1000);

    // รอ 90 วินาที
    await new Promise(resolve => setTimeout(resolve, 100000));

    // หยุด interval เมื่อเสร็จแล้ว
    clearInterval(logInterval);

    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Completed! Total time: ${totalTime} seconds`);

    res.send({
      message: 'All Emails Have Been Sent',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});


app.get('/120', async (req, res) => {
  try {
    const startTime = Date.now();
    let secondsElapsed = 0;

    // สร้าง interval สำหรับ log ทุกวินาที
    const logInterval = setInterval(() => {
      secondsElapsed = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Waiting... ${secondsElapsed} seconds elapsed`);
    }, 1000);

    // รอ 90 วินาที
    await new Promise(resolve => setTimeout(resolve, 120000));

    // หยุด interval เมื่อเสร็จแล้ว
    clearInterval(logInterval);

    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Completed! Total time: ${totalTime} seconds`);

    res.send({
      message: 'All Emails Have Been Sent',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
