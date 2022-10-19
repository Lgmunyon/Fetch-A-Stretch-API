const express = require('express')
const app = express()
const PORT = 8000

// const savage ={
//     'age': 29,
//     'birthName': 'Sheyaa Bin Abraham-Joseph',
//     'birthLocation': 'London, England'
// }

const stretches ={
    'Low Back': {
        'Low back rotation':{
            'description':'Sitting on a chair with your feet flat on the floor, twist your upper body so your shoulders rotate to one side. You can use the chair for support, holding on to get a deep muscle stretch. Go only as far as you can comfortably. You will feel the pull from your lower back up to the middle of your back. ‘You may experience a painless crack from your spine, but that’s normal; it’s just the joints opening up,’ says Feldman. Hold for 20 seconds or six breaths, and return to the starting position. Repeat on the other side.',
            'video': "<iframe src='https://drive.google.com/file/d/1oEvn-Kz_hKQ7fxA_DpsvVq8tcHkcXhbF/preview' width='640' height='480' allow='autoplay'></iframe>",

        },
        
        'Bending over low back stretch':{
            'description':'Sit in a chair or on a bench, feet flat on the floor, legs about hip-distance apart. Place your hands on your knees and slowly incline your body forward until your head and upper back hang forward between your legs. (To add an inner-thigh stretch, brace your elbows inside your knees and press your legs open.) Be sure to come up slowly so you don’t get dizzy.',
            'video':"<iframe src='https://drive.google.com/file/d/18VK6Z3kSrzf7gtnSzeKiP86uNuRyQnHb/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Seated knee to chest':{
            'description':'Sit up in your chair with your feet flat on the ground. Bring one leg off of the ground, bringing hug your knee into your chest. Lean back slightly to deepen the stretch and hold for 30 seconds.',
            'video':"<iframe src='https://drive.google.com/file/d/1T6KCzJOliqSKXbsOjCRQ9Zw4Eq3ZJKAS/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Seated pelvic tilt with breathing':{
            'description':'Sit with your back against your chair and heels flat on the floor. Keeping your neck relaxed take a deep breath through the nose and exhale through the mouth. During your exhale pull your heels into the floor and squeeze your core. You should feel your low back go flat against the chair. Holding this position, perform 5-10 deep breaths.',
            'video':"<iframe src='https://drive.google.com/file/d/1ufHkbhQCNM-p50lyi6uabYe6a_QQTg3l/preview' width='640' height='480' allow='autoplay'></iframe>",
        },

    },

    'Hip Stretch':{
        'Kneeling psoas stretch':{
            'description':'Beginning Half Kneeling Hip Flexor Stretch Exercise Kneel on the left knee with the right foot positioned in front of you at a 90 degree angle. Suck in the tummy, drawing the navel towards the spine. Flatten the lower back by tilting the pelvis forward. Extend the left arm towards the ceiling while keeping the elbow close to the head.',
            'video':"<iframe src='https://drive.google.com/file/d/1mJRNPimWhEIuYvO58UUNK_aaA5o2A_Ff/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Standing psoas stretch':{
            'description':'Stand in a staggered stance with your right leg forward. Rotate your hips forward and to the right. Bend slightly at the knees and slowly continue to push your hips forward until you feel a good stretch. Hold for desired amount of time and then switch legs and repeat the steps.',
            'video':"<iframe src='https://drive.google.com/file/d/1w07iLtsWC-l48o3JfLFKmFf7q7tlDVW_/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Seated glute stretch':{
            'description':'Sit down in a chair and sit as upright as you can. Cross one leg over the other so that the outside of your foot is resting on your other knee. Push down on the knee of the leg that is crossed over until you feel a good stretch in your hips and glutes. Hold for the desired amount of time and then switch sides.',
            'video':"<iframe src='https://drive.google.com/file/d/1ndNeejv07oDjzYBpWeB1RgPN7L59mMdq/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Seated cross-body glute stretch':{
            'description':'Sit down in a chair and sit as upright as you can. Cross one leg over the other so that the outside of your foot is resting on your other knee. Take the knee of the crossed leg and pull it across your body, towards the opposite shoulder. Hold for the desired amount of time and then switch legs.',
            'video':"<iframe src='https://drive.google.com/file/d/10hRk-VwxsBGfJ7H3SPIIQrqyYaA6vNZv/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
    },

    'Leg stretch':{
        'Seated hamstring stretch':{
            'description':'While seated, rest your heel on the floor with your knee straight. Gently lean forward until a stretch is felt behind your knee and thigh. Make sure to keep your back straight throughout this stretch. Hold for the desired time then switch sides.',
            'video':"<iframe src='https://drive.google.com/file/d/1eRJ5IRTTnfYZWM40Hv_UR2NLM7ML_lSj/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Butterfly stretch':{
            'description':'Sit upright with a tall spine. Press the soles of the feet together, so that the knees drop to the floor. Root through the legs and sit bones. Grasp the ankles or outside edges of the feet with your hands. Engage your core slightly and gently lean forward until you feel a stretch. You should feel the stretch in your inner thighs, hips, and lower back. Stay in the stretch for one to two minutes. To deepen the intensity, move your feet closer in toward your hips.',
            'video':"<iframe src='https://drive.google.com/file/d/1TaUvo5v1WEr0vAQ04cAZh06Vu2rSy4fY/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Standing quad stretch':{
            'description':'Stand on one leg. If you need support, hold onto something solid, such as a wall or chair, for support. Bend your knee and bring your heel toward your buttock. Reach for your ankle with your hand. Stand up straight and pull in your abdominal muscles, trying to keep your knees next to each other, and relax your shoulders. As you hold your leg in the bent position you will feel a slight pull along the front of your thigh and hip. Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the other leg.',
            'video':"<iframe src='https://drive.google.com/file/d/1QHQatAxpyoHpqf5-Od_-FuymFkRJ75ua/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Chair quad stretch':{
            'description':'Stand on one leg in front of the seat portion of a chair. If you need support hold onto something solid. Take your raised leg and put the top of your foot on the chair. Stand up straight and pull in your abdominal muscles. If you feel a stretch already then stay in this position. If you wish to increase the stretch, slowly move into a lunge position. Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the other leg.',
            'video':"<iframe src='https://drive.google.com/file/d/1K5mFr6UiBndR7Qu-boFubNhaUAd2EUZ6/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Seated abductor stretch':{
            'description':'To perform this stretch for the right leg pull your right knee into your chest, then set the right foot on the chair crossing your left leg. Keep your chest high. In this position simply hug your right knee into your chest. If you wish to increase the stretch twist your torso to the right. Breathe deeply and hold the stretch for 20-30 seconds, release and repeat on the other leg.',
            'video':"<iframe src='https://drive.google.com/file/d/1TjTSSpsXUhmsDn6B2bSLHmS7tbPQRMNj/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
    },

    'Neck Stretch':{
        'Chin tuck':{
            'description':'Sit upright and look straight ahead with the ears directly over the shoulders. Place a finger on the chin. Without moving the finger, pull the chin and head straight back until a good stretch is felt at the base of the head and top of the neck. Hold for 5 seconds if possible. Bring the chin forward again to the finger. Repeat for a total of 10 times, or as tolerated.',
            'video':"<iframe src='https://drive.google.com/file/d/1ymkq45TO26AfH1HJ3VQ9kgiRhDS1qbIw/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Neck extension stretch':{
            'description':'Without arching your back, slowly move your head backward so you are looking upward. You should feel a slight stretch on the front of your neck. Hold for 5 seconds. Return to starting position. Perform this 3-5 times.',
            'video':"<iframe src='https://drive.google.com/file/d/1CZaHopjKTxee7LSXklRMO2l8kzMyhZpK/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Neck towel traction':{
            'description':'Place rolled towel around your neck, and hold ends with hands. Slowly look up as far as you can, rolling your head over the towel. Apply gentle pressure on towel to support cervical spine as you extend head back. Do not hold the position. Instead return to starting position. Repeat 10 times.',
            'video':"<iframe src='https://drive.google.com/file/d/1bNGt-EUHIA53scdzfDUIPnJlHilW7qUR/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Side-to-side neck stretch':{
            'description':'Sitting with good posture, let your head slowly fall towards your shoulder. You can apply light pressure with your hand if desired. Hold 30 seconds, repeat 3 times.',
            'video':"<iframe src='https://drive.google.com/file/d/1Jgd-ei-3Z-EH5T6kmYQzuD2L_DvG_BC1/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
    },

    'Shoulders':{
        'At your desk pec stretch':{
            'description':'Sit so that your desk is to your side. Place your forearm on the desk, your elbow bent at 90 degrees. Keeping your chest puffed out slowly lean forward while sliding your chair back. Your arm will begin to straighten slightly. Continue leaning forward until you feel a mild stretch in your chest. Breath deep, in and out, while holding this position for 30 seconds. Use your opposite hand to slowly push out of it and repeat on the other side.',
            'video':"<iframe src='https://drive.google.com/file/d/1rdCOVuinLayGQbV8hSW6PTjlJoDar1Ci/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Doorway pec stretch':{
            'description':'Stand next to a doorway or the protruding corner of a wall. Place the upper arm against the side of this door frame or wall, with a 90 degree angle at both your upper arm and forearm. Now slowly lean your body forward, keeping your shoulder stable, chest high, and being sure not to rotate your shoulder forward. To make the stretch more challenging, simply slide your arm up the wall.',
            'video':"<iframe src='https://drive.google.com/file/d/1GYDMHgVL73vLL2Asx6LzRCWfoRj7r_h0/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Overhead reach':{
            'description':'Extend your arms overhead with elbows straight. Interlock fingers if possible while keeping your back and neck straight. In this position lean to one side until you feel a stretch on the elongated side. Hold for 30 seconds and lean to the opposite side.',
            'video':"<iframe src='https://drive.google.com/file/d/1J3Kkeabit5vk6evWdsgcIvAAMg9_Ni0a/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'W to Y':{
            'description':'Begin with your back straight. Make “W” shape with your arms. Pull the elbows down using your lats as you lower them to your stomach area and then squeeze your shoulder blades together. Hold for 2 breaths. Slowly make “Y” shape with your arms by extending both arms up. Hold for 2 breaths. Hold briefly at each end point, Aim for 10 repetitions.',
            'video':"<iframe src='https://drive.google.com/file/d/1fperhj8R8eJ3-sMI03Yk92eXASIRJsVc/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Cross body stretch':{
            'description':'Take one arm and place it across your chest, making sure that your elbow remains at shoulder height during the stretch. Using your other hand, grab the outer forearm of the arm that’s across your body. Push that arm into your body to feel more of a stretch. Hold for 30 seconds. Repeat on the other arm.',
            'video':"<iframe src='https://drive.google.com/file/d/1s28AKXriZhFFDce5nUC78tcNBbVDw8Ao/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
    },

    'Hands':{
        'One-by-one finger stretch':{
            'description':'Lay your hand on your desk, palm up. Take the opposite hand and push down on all fingers except the index finger. Curl your index finger without allowing the other fingers to move. You should feel a stretch throughout the forearm. Repeat the same process with the other fingers individually. Repeat on the other hand.',
            'video':"<iframe src='https://drive.google.com/file/d/1aNYgxZIL0vYfv5-WVVeerGQoiAntWaeB/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Wrist extensor stretch':{
            'description':'Raise your arm in front of you with your palm facing the floor. Use your other hand to pull the hand downwards and towards the forearm to stretch out the extensor muscles. You should feel a slight stretch in the wrist and down the forearm.',
            'video':"<iframe src='https://drive.google.com/file/d/1uAOwYtQ1r3rA13jv1kqXO7om7O82MjjE/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
        'Wrist flexor stretch':{
            'description':'Raise your arm in front of you with your palm facing the floor. Use your other hand to pull the hand upwards and towards the forearm to stretch out the flexor muscles. You should feel a slight stretch in the wrist and down the forearm.',
            'video':"<iframe src='https://drive.google.com/file/d/1m9LL3gpRxlWM5UeAbmOImaCMG4NhOMfi/preview' width='640' height='480' allow='autoplay'></iframe>",
        },
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:bodyPart', (request, response)=>{
    const bodyParts = request.params.bodyPart
    if (stretches[bodyParts]){
        response.json(stretches[bodyParts])
    }
     response.json('No stretch')
})

// app.get('/api', (request, response) => {
//     response.json(stretches)
// })

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! You better go catch it!`)
})