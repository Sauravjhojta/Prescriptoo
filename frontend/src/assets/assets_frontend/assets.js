import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
   {
    _id: 'doc1',
    name: 'Dr. Anil Reddy',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Anil Reddy is a dedicated General Physician known for his commitment to preventive care, accurate diagnosis, and holistic treatment. He focuses on managing chronic conditions and promoting overall wellness through patient education and lifestyle guidance.',
    fees: 500,
    address: {
        line1: '17th Cross, Richmond Town',
        line2: 'Near Lalbagh, Bangalore, Karnataka'
    }
},
{
    _id: 'doc2',
    name: 'Dr. Karan Malhotra',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Karan Malhotra is a compassionate Gynecologist dedicated to providing quality care for women at all stages of life. He specializes in managing reproductive health, pregnancy care, and gynecological disorders with a patient-first approach and modern treatment techniques.',
    fees: 600,
    address: {
        line1: '27th Cross, Indiranagar',
        line2: 'Near CMH Road, Bangalore, Karnataka'
    }
},
{
    _id: 'doc3',
    name: 'Dr. Priya Menon',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Priya Menon is a skilled Dermatologist who focuses on diagnosing and treating a wide range of skin, hair, and nail conditions. She is dedicated to helping patients achieve healthy, radiant skin through personalized care and the latest dermatological treatments.',
    fees: 300,
    address: {
        line1: '37th Cross, Panampilly Nagar',
        line2: 'Near South Railway Station, Kochi, Kerala'
    }
},
{
    _id: 'doc4',
    name: 'Dr. Prakash Nair',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Prakash Nair is a compassionate Pediatrician dedicated to the health and well-being of children from infancy through adolescence. He believes in building trust with both children and parents while providing accurate diagnoses and personalized pediatric care.',
    fees: 400,
    address: {
        line1: 'Sector 5, Rohini',
        line2: 'Near Metro Station, Delhi, India'
    }
},
{
    _id: 'doc5',
    name: 'Dr. Manoj Singh',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Manoj Singh is a skilled Neurologist with a deep understanding of neurological disorders. He is committed to providing expert care for conditions affecting the brain, spine, and nerves, focusing on accurate diagnosis and effective treatment plans.',
    fees: 500,
    address: {
        line1: 'A-12, Sector 62',
        line2: 'Noida, Uttar Pradesh, India'
    }
},
{
    _id: 'doc6',
    name: 'Dr. Shalini Deshmukh',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Shalini Deshmukh is a dedicated Neurologist known for her expertise in diagnosing and treating neurological conditions. She emphasizes patient-centered care and uses the latest techniques to manage brain and nervous system disorders effectively.',
    fees: 500,
    address: {
        line1: 'C-34, Green Park',
        line2: 'New Delhi, Delhi, India'
    }
},
{
    _id: 'doc7',
    name: 'Dr. Anjali Sharma',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Anjali Sharma is a compassionate General Physician with 4 years of experience in providing holistic and preventive healthcare. She focuses on early diagnosis and effective management of common illnesses to improve patient well-being.',
    fees: 500,
    address: {
        line1: 'A-12, Rajendra Nagar',
        line2: 'New Delhi, Delhi, India'
    }
},
{
    _id: 'doc8',
    name: 'Dr. Radhika Nair',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Radhika Nair is a dedicated Gynecologist with 3 years of experience specializing in women’s health, prenatal care, and reproductive wellness. She is committed to providing personalized and compassionate care to her patients.',
    fees: 600,
    address: {
        line1: 'C-45, Lajpat Nagar',
        line2: 'New Delhi, Delhi, India'
    }
},
{
    _id: 'doc9',
    name: 'Dr. Nikhil Sharma',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Nikhil Sharma is a passionate Dermatologist with 1 year of experience specializing in skin health, treatment of skin disorders, and cosmetic dermatology. He is dedicated to helping patients achieve healthy and radiant skin.',
    fees: 300,
    address: {
        line1: 'B-12, Suraj Nagar',
        line2: 'New Delhi, Delhi, India'
    }
},
{
    _id: 'doc10',
    name: 'Dr. Pooja Kapoor',
    image: doc10,
    speciality: 'Pediatrician',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Pooja Kapoor is a compassionate Pediatrician with 2 years of experience providing dedicated care to infants, children, and adolescents. She focuses on preventive healthcare, growth monitoring, and treating childhood illnesses with empathy and expertise.',
    fees: 400,
    address: {
        line1: 'House No. 24, Mall Road',
        line2: 'Shimla, Himachal Pradesh, India'
    }
},
{
    _id: 'doc11',
    name: 'Dr. Kavita Joshi',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Kavita Joshi is a skilled Neurologist with a keen focus on diagnosing and managing disorders of the brain and nervous system. She specializes in treating conditions such as migraines, epilepsy, stroke, and neurodegenerative diseases with precision and care.',
    fees: 500,
    address: {
        line1: 'B-12, Neelkanth Heights, Powai',
        line2: 'Mumbai, Maharashtra, India - 400076'
    }
},
{
    _id: 'doc12',
    name: 'Dr. Meera Iyer',
    image: doc12,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Meera Iyer is a dedicated Gastroenterologist with expertise in diagnosing and treating a wide range of digestive system disorders. She is committed to providing personalized care for conditions such as acid reflux, ulcers, liver diseases, and IBS, ensuring optimal gastrointestinal health for her patients.',
    fees: 500,
    address: {
        line1: 'Flat 4B, Clover Heights, Kothrud',
        line2: 'Pune, Maharashtra, India - 411038'
    }
},

{
    _id: 'doc13',
    name: 'Dr. Mohan Iyer',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Mohan Iyer is a dedicated General Physician with 4 years of experience in diagnosing and treating a wide range of acute and chronic illnesses. He emphasizes preventive care and patient education to promote overall health and wellness.',
    fees: 500,
    address: {
        line1: 'Sector 22, Near Government Hospital',
        line2: 'Chandigarh, Punjab, India'
    }
},
{
    _id: 'doc14',
    name: 'Dr. Sandeep Verma',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Sandeep Verma is a compassionate Gynecologist with 3 years of experience in providing expert care in women’s reproductive health. He specializes in prenatal care, fertility consultations, menstrual disorders, and general gynecological wellness.',
    fees: 600,
    address: {
        line1: 'House No. 145, Sector 19-B',
        line2: 'Chandigarh, Punjab, India'
    }
},
{
    _id: 'doc15',
    name: 'Dr. Amelia Hill',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Amelia Hill is a dedicated Dermatologist with a passion for treating skin, hair, and nail conditions. With a focus on personalized care, she offers effective solutions for acne, eczema, pigmentation issues, and aesthetic skin treatments.',
    fees: 300,
    address: {
        line1: 'Flat No. 204, Palm Residency, Andheri West',
        line2: 'Mumbai, Maharashtra, India - 400053'
    }
},

]