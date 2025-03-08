export async function POST(req) {
    try {
        const { message } = await req.json();
        const botResponse = getBotResponse(message);
        return Response.json({ response: botResponse });
    } catch (error) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (/\b(hello|hi)\b/.test(input)) {
        return "Hello! How can I help you today?";
    } 
    else if (/\b(services|service)\b/.test(input)) {
        return "We offer personal training, group fitness classes, weight training, cardio workouts, yoga, Zumba, and physiotherapy sessions.";
    } 
    else if (/\b(personal|training)\b/.test(input)) {
        return "Yes! Our certified trainers provide personalized workout plans based on your fitness goals.";
    } 
    else if (/\b(workout|programs|program)\b/.test(input)) {
        return "We offer strength training, endurance workouts, HIIT, functional training, and rehabilitation exercises.";
    } 
    else if (/\b(membership|join|fee|cost|price)\b/.test(input)) {
        return "We have different membership plans: Monthly, Quarterly, and Annual. Let me know which one interests you!";
    } 
    else if (/\b(location|address)\b/.test(input)) {
        return "We are located at XYZ Street, near ABC Mall. You can check Google Maps for directions!";
    } 
    else if (/\b(contact|phone|number|email)\b/.test(input)) {
        return "You can contact us at +91 9876543210 or email us at support@gymbot.com.";
    } 
    else if (/\b(trainers|coach|certified)\b/.test(input)) {
        return "Yes! All our trainers are certified and experienced in different workout disciplines.";
    } 
    else if (/\b(timings|hours|open|closing)\b/.test(input)) {
        return "We are open from 5 AM to 10 PM on weekdays and 6 AM to 8 PM on weekends.";
    } 
    else if (/\b(nutrition|diet|meal plan)\b/.test(input)) {
        return "Yes, we have expert nutritionists who can help you with meal plans based on your fitness goals.";
    } 
    else if (/\b(spa|sauna|relaxation)\b/.test(input)) {
        return "Yes, we have a spa and sauna for post-workout relaxation.";
    } 
    else if (/\b(group classes|fitness classes|aerobics|Zumba)\b/.test(input)) {
        return "We offer group classes like yoga, Zumba, aerobics, and spinning.";
    } 
    else if (/\b(hiit|cardio|endurance)\b/.test(input)) {
        return "We have HIIT and endurance training sessions for boosting stamina and fat loss.";
    } 
    else if (/\b(bodybuilding|strength|muscle|bulk)\b/.test(input)) {
        return "Our strength training programs focus on muscle gain and progressive overload techniques.";
    } 
    else if (/\b(weight loss|fat burn|lose weight)\b/.test(input)) {
        return "We offer customized weight loss programs combining cardio, strength training, and diet guidance.";
    } 
    else if (/\b(yoga|meditation|flexibility)\b/.test(input)) {
        return "We offer yoga classes for flexibility, relaxation, and mental well-being.";
    } 
    else if (/\b(rehab|injury|physiotherapy)\b/.test(input)) {
        return "Our physiotherapy services help with injury recovery and rehabilitation.";
    } 
    else if (/\b(minimum age|age limit)\b/.test(input)) {
        return "The minimum age to join our gym is 16 years.";
    } 
    else if (/\b(lockers|storage|security)\b/.test(input)) {
        return "Yes, we provide secure lockers for members.";
    } 
    else if (/\b(payment|emi|installment)\b/.test(input)) {
        return "We offer flexible payment options, including monthly, quarterly, and yearly plans.";
    } 
    else if (/\b(women|ladies|female only)\b/.test(input)) {
        return "Yes, we have a dedicated women's section and female trainers available.";
    } 
    else if (/\b(trial|free session)\b/.test(input)) {
        return "Yes! We offer a one-day free trial. Would you like to book it?";
    } 
    else if (/\b(swimming|pool)\b/.test(input)) {
        return "Currently, we don’t have a swimming pool, but we offer other great fitness services!";
    } 
    else if (/\b(personal trainer cost)\b/.test(input)) {
        return "Personal training charges vary based on package selection. Please visit our gym for details.";
    } 
    else if (/\b(supplements|protein|whey)\b/.test(input)) {
        return "We do not sell supplements, but our trainers can guide you on safe supplementation.";
    } 
    else if (/\b(discount|offer|promotion)\b/.test(input)) {
        return "We have ongoing discounts for students and corporate memberships. Contact us for more details!";
    } 
    else if (/\b(guest pass|friend pass)\b/.test(input)) {
        return "Yes! Members can bring a friend using a guest pass once a month.";
    } 
    else if (/\b(gym rules|etiquette|guidelines)\b/.test(input)) {
        return "Gym rules: Wear proper attire, wipe down equipment after use, and respect others' space.";
    } 
    else if (/\b(cancellation|refund|pause membership)\b/.test(input)) {
        return "Memberships can be paused or canceled under certain conditions. Please contact the front desk.";
    } 
    else if (/\b(online coaching|virtual training)\b/.test(input)) {
        return "We offer online training sessions for remote clients.";
    } 
    else if (/\b(weekend classes|sunday open)\b/.test(input)) {
        return "Yes! We are open on weekends with special workout sessions.";
    } 
    else if (/\b(bootcamp|outdoor training)\b/.test(input)) {
        return "We organize outdoor boot camps for high-intensity training.";
    } 
    else if (/\b(calisthenics|bodyweight training)\b/.test(input)) {
        return "Yes! We have calisthenics training areas with bars and rings.";
    } 
    else if (/\b(powerlifting|deadlift|bench press)\b/.test(input)) {
        return "Yes! We have specialized powerlifting sections with heavy-duty equipment.";
    } 
    else if (/\b(boxing|mma|self-defense)\b/.test(input)) {
        return "We offer boxing and self-defense classes.";
    } 
    else if (/\b(gym branch|franchise|other locations)\b/.test(input)) {
        return "We have multiple branches. Let me know your location to find the nearest one!";
    } 
    else if (/\b(closing soon|last entry time)\b/.test(input)) {
        return "The last entry to the gym is allowed 30 minutes before closing time.";
    } 
    else if (/\b(best time to workout)\b/.test(input)) {
        return "Morning and evening sessions are the most effective. Choose based on your schedule!";
    } 
    else if (/\b(how to start|beginner|first time)\b/.test(input)) {
        return "If you’re a beginner, our trainers will guide you through a basic workout plan.";
    } 
    else if (/\b(custom workout|specific goal|tailored plan)\b/.test(input)) {
        return "Yes! We can create a custom workout plan based on your needs.";
    } 
    else if (/\b(student discount|discount for students)\b/.test(input)) {
        return "Yes, we offer special discounts for students. Please visit our gym for details.";
    }
    else if (/\b(family membership|family plan)\b/.test(input)) {
        return "Yes! We have family membership plans for multiple members. Contact us for more details.";
    }
    else if (/\b(transfer membership|membership transfer)\b/.test(input)) {
        return "Memberships can be transferred under certain conditions. Please visit the front desk.";
    }
    else if (/\b(mobile app|gym app|track workouts)\b/.test(input)) {
        return "Yes! We have a mobile app where you can track workouts, book sessions, and check schedules.";
    }
    else if (/\b(corporate wellness|corporate program)\b/.test(input)) {
        return "Yes, we offer corporate wellness programs for companies. Contact us for partnerships!";
    }
    else if (/\b(female only hours|ladies hours)\b/.test(input)) {
        return "Yes, we have dedicated female-only workout hours and female trainers available.";
    }
    else if (/\b(air conditioning|AC|air cooled)\b/.test(input)) {
        return "Yes! Our gym is fully air-conditioned for a comfortable workout experience.";
    }
    else if (/\b(stretching area|warm-up area)\b/.test(input)) {
        return "Yes! We have a dedicated stretching and warm-up area.";
    }
    else if (/\b(resistance bands|TRX training)\b/.test(input)) {
        return "Yes, we provide resistance bands and TRX training equipment.";
    }
    else if (/\b(seasonal challenge|fitness challenge)\b/.test(input)) {
        return "We organize seasonal fitness challenges to keep you motivated!";
    }
    else if (/\b(book machine|machine reservation)\b/.test(input)) {
        return "Machines are available on a first-come, first-served basis. No reservations needed.";
    }
    else if (/\b(social events|gym events)\b/.test(input)) {
        return "We host social events and fitness meetups for members.";
    }
    else if (/\b(personal trainer availability|trainer booking)\b/.test(input)) {
        return "Our trainers are available for booking. Let us know your preferred time!";
    }
    else if (/\b(workout with friend|partner training)\b/.test(input)) {
        return "Yes! You can train with a partner. We also offer buddy training sessions.";
    }
    else if (/\b(refer friend|referral program)\b/.test(input)) {
        return "Refer a friend and get special discounts on your membership!";
    }
    else if (/\b(waiting list|class full)\b/.test(input)) {
        return "Some popular classes have waiting lists. You can book in advance through our app.";
    }
    else if (/\b(workout tracking|progress tracking)\b/.test(input)) {
        return "We provide tools and trainers to track your workout progress.";
    }
    else if (/\b(body scan|BMI check|fitness assessment)\b/.test(input)) {
        return "We offer free body composition analysis and fitness assessments.";
    }
    else if (/\b(busy hours|less crowded time)\b/.test(input)) {
        return "Our gym is busiest from 6 AM to 9 AM and 6 PM to 9 PM. Afternoons are less crowded.";
    }
    else if (/\b(lost item|lost and found)\b/.test(input)) {
        return "If you've lost an item, check with our front desk. We have a lost and found section.";
    }
    else if (/\b(music|gym playlist|headphones allowed)\b/.test(input)) {
        return "We play motivational music, and you can also bring your own headphones.";
    }
    else if (/\b(vegan diet|plant-based diet)\b/.test(input)) {
        return "Our nutritionists can help create a vegan-friendly meal plan.";
    }
    else if (/\b(home workout|gym alternative)\b/.test(input)) {
        return "We provide home workout guides and online coaching options.";
    }
    else if (/\b(fitness certification|trainer certification)\b/.test(input)) {
        return "Yes! All our trainers are certified professionals.";
    }
    else if (/\b(calorie tracking|macro tracking)\b/.test(input)) {
        return "We offer calorie and macro tracking guidance through our nutritionists.";
    }
    else if (/\b(body transformation|before after)\b/.test(input)) {
        return "We have transformation programs and real member success stories!";
    }
    else if (/\b(hydration station|free water)\b/.test(input)) {
        return "We provide hydration stations where you can refill your water bottles.";
    }
    else if (/\b(night shift|24-hour gym)\b/.test(input)) {
        return "Currently, we are not a 24-hour gym, but we open early at 5 AM.";
    }
    else if (/\b(kids area|childcare)\b/.test(input)) {
        return "We don’t offer childcare services at the moment.";
    }
    else if (/\b(disability access|wheelchair accessible)\b/.test(input)) {
        return "Yes! Our gym is wheelchair accessible with special equipment available.";
    }
    else if (/\b(sports training|athlete training)\b/.test(input)) {
        return "We offer specialized training for athletes in different sports.";
    }
    else if (/\b(best shoes|gym shoes)\b/.test(input)) {
        return "We recommend wearing supportive training or running shoes.";
    }
    else if (/\b(massage therapy|muscle recovery)\b/.test(input)) {
        return "We offer massage therapy for muscle recovery.";
    }
    else if (/\b(squat rack|deadlift platform)\b/.test(input)) {
        return "Yes! We have multiple squat racks and deadlift platforms.";
    }
    else if (/\b(booty workout|glutes training)\b/.test(input)) {
        return "We have dedicated glutes training equipment and programs.";
    }
    else if (/\b(body recomposition|lose fat gain muscle)\b/.test(input)) {
        return "Yes! We provide customized plans for body recomposition.";
    }
    else if (/\b(rest days|how many rest days)\b/.test(input)) {
        return "Rest days depend on your program. Generally, 1-2 rest days per week are ideal.";
    }
    else if (/\b(strongman training|atlas stones|yoke walk)\b/.test(input)) {
        return "We have strongman equipment for advanced strength training.";
    }
    else if (/\b(advanced training|elite coaching)\b/.test(input)) {
        return "We offer coaching for elite athletes and advanced lifters.";
    }
    else if (/\b(how to build endurance|stamina)\b/.test(input)) {
        return "We provide endurance-focused training sessions and HIIT workouts.";
    }
    else if (/\b(keto diet|low-carb meal plan)\b/.test(input)) {
        return "Yes, our nutritionists can guide you on a keto or low-carb diet.";
    }
    else if (/\b(exercise for back pain|rehab exercises)\b/.test(input)) {
        return "Our physiotherapists can help you with back pain recovery exercises.";
    }
    else if (/\b(supplement consultation|best supplements)\b/.test(input)) {
        return "Our trainers can guide you on safe supplementation but we don’t sell supplements.";
    }
    else if (/\b(vitamins|multivitamin recommendation)\b/.test(input)) {
        return "Our nutritionists can help recommend essential vitamins and supplements.";
    }
    else if (/\b(senior citizen discount|elderly discount)\b/.test(input)) {
        return "Yes, we offer special discounts for senior citizens. Please contact our front desk for more details.";
    }
    else if (/\b(vacation hold|pause membership|freeze membership)\b/.test(input)) {
        return "Yes, you can put your membership on hold for a certain period. Please visit us to discuss options.";
    }
    else if (/\b(can I bring a friend|guest pass)\b/.test(input)) {
        return "Yes! We offer guest passes. Your friend can join for a trial session.";
    }
    else if (/\b(best time to workout|morning vs evening workout)\b/.test(input)) {
        return "The best time depends on your schedule! Morning workouts boost energy, while evening workouts relieve stress.";
    }
    else if (/\b(bulking|how to bulk|gain muscle fast)\b/.test(input)) {
        return "To bulk up, focus on progressive overload, eat a calorie surplus, and ensure sufficient protein intake.";
    }
    else if (/\b(pre-workout|what to eat before gym)\b/.test(input)) {
        return "A good pre-workout meal includes carbs and protein, like a banana with peanut butter or oatmeal.";
    }
    else if (/\b(post-workout|what to eat after gym)\b/.test(input)) {
        return "A protein-rich meal is ideal after workouts. Try a protein shake, chicken with rice, or Greek yogurt.";
    }
    else if (/\b(heart rate monitor|track heart rate)\b/.test(input)) {
        return "Yes, we provide heart rate monitoring equipment and recommend fitness trackers.";
    }
    else if (/\b(workout duration|how long should I workout)\b/.test(input)) {
        return "A workout can be 45-90 minutes depending on your goal. Quality over quantity!";
    }
    else if (/\b(does cardio burn muscle|cardio vs weights)\b/.test(input)) {
        return "Excessive cardio without enough food can burn muscle. Balance strength and cardio for best results.";
    }
    else if (/\b(is weightlifting safe|safety in gym)\b/.test(input)) {
        return "Weightlifting is safe if done with proper form. Always warm up and use correct technique.";
    }
    else if (/\b(gym anxiety|nervous to start gym)\b/.test(input)) {
        return "It’s normal to feel nervous! Start slow, focus on yourself, and remember everyone started somewhere.";
    }
    else if (/\b(plans|membership)\b/.test(input)) {
        return "We offer different membership plans: Basic, Premium, and VIP. Let me know which one interests you!";
    } 
    else if (/\b(cost|price|fee)\b/.test(input)) {
        return "Our membership costs vary based on the plan you choose.";
    } 
    else if (/\b(trial|free session)\b/.test(input)) {
        return "Yes! We offer a one-day free trial. Would you like to book it?";
    } 
    else if (/\b(cancel|freeze|pause)\b/.test(input)) {
        return "Yes, you can freeze or cancel your membership based on certain conditions.";
    } 
    else if (/\b(trainer|coach|personal)\b/.test(input)) {
        return "Yes! We have certified personal trainers to guide you.";
    } 
    else if (/\b(classes|sessions)\b/.test(input)) {
        return "We offer Yoga, HIIT, Strength Training, and more!";
    } 
    else if (/\b(meal|nutrition|diet)\b/.test(input)) {
        return "We provide personalized meal plans designed by expert nutritionists.";
    } 
    else if (/\b(recovery|rehab|therapy)\b/.test(input)) {
        return "We have sauna, physiotherapy, and injury recovery programs.";
    } 
    else if (/\b(online|virtual)\b/.test(input)) {
        return "Yes! We offer online coaching and virtual training programs.";
    } 
    else if (/\b(workout|training)\b/.test(input)) {
        return "We provide customized workout plans including strength training, cardio, and endurance sessions.";
    } 
    else if (/\b(beginner|start|first time)\b/.test(input)) {
        return "If you're a beginner, we recommend a full-body workout guided by our trainers.";
    } 
    else if (/\b(track|progress|logs)\b/.test(input)) {
        return "Yes! We offer progress tracking tools and fitness assessments.";
    } 
    else if (/\b(custom|goal|personalized)\b/.test(input)) {
        return "Yes! We can create a custom workout and diet plan based on your fitness goals.";
    } 
    else if (/\b(reach|contact|support)\b/.test(input)) {
        return "You can contact us via phone at +91 9876543210 or email at support@gymbot.com.";
    } 
    else if (/\b(location|address|find)\b/.test(input)) {
        return "We are located at XYZ Street, near ABC Mall.";
    } 
    else if (/\b(book|appointment|visit)\b/.test(input)) {
        return "You can book a session online or visit us at our gym.";
    } 
    else if (/\b(review|feedback)\b/.test(input)) {
        return "We appreciate your feedback! You can leave a review on Google or our website.";
    } else if (/\b(membership|join|plans)\b/.test(input)) {
        return "We have Basic, Premium, and VIP memberships. Which one are you interested in?";
    } 
    else if (/\b(cost|price|fee)\b/.test(input)) {
        return "Our membership costs vary based on the plan. Do you want monthly or yearly details?";
    } 
    else if (/\b(discount|offer|promotion)\b/.test(input)) {
        return "We have discounts for students and corporate memberships. Would you like details?";
    } 
    else if (/\b(trial|free session)\b/.test(input)) {
        return "Yes! We offer a one-day free trial. Would you like to book it?";
    } 
    else if (/\b(cancel|freeze|pause)\b/.test(input)) {
        return "You can pause or cancel your membership under specific conditions. Need details?";
    } 
    else if (/\b(payment|emi|installment)\b/.test(input)) {
        return "We offer flexible payment plans including monthly, quarterly, and yearly options.";
    } 
    else if (/\b(refund|cancellation)\b/.test(input)) {
        return "Refunds depend on the membership policy. Would you like to know more?";
    } 
    else if (/\b(renew|extension|upgrade)\b/.test(input)) {
        return "You can upgrade or extend your membership anytime. Need help choosing a plan?";
    } 
    // SERVICES
    else if (/\b(services|facilities|features)\b/.test(input)) {
        return "We offer personal training, group classes, weight training, and more. Want specifics?";
    } 
    else if (/\b(gym equipment|machines|facilities)\b/.test(input)) {
        return "We have treadmills, free weights, cable machines, and more. Need a full list?";
    } 
    else if (/\b(personal trainer|coach|guidance)\b/.test(input)) {
        return "Yes! We have certified trainers to guide you. Would you like personal training details?";
    } 
    else if (/\b(group classes|fitness classes|aerobics|Zumba)\b/.test(input)) {
        return "We offer group classes like yoga, HIIT, Zumba, and aerobics. Interested in a schedule?";
    } 
    else if (/\b(spa|sauna|relaxation)\b/.test(input)) {
        return "Yes! We have a spa and sauna for post-workout relaxation.";
    } 
    else if (/\b(nutrition|diet|meal plan)\b/.test(input)) {
        return "Our nutritionists can help with diet plans. Want a consultation?";
    } 
    else if (/\b(lockers|storage|security)\b/.test(input)) {
        return "Yes, we provide secure lockers for members.";
    } 
    else if (/\b(showers|washrooms|hygiene)\b/.test(input)) {
        return "Yes, we have clean showers and changing rooms.";
    } 
    // TRAINING
    else if (/\b(training|workout|exercise)\b/.test(input)) {
        return "We provide strength training, endurance, HIIT, and more. Need a recommendation?";
    } 
    else if (/\b(strength|bodybuilding|muscle)\b/.test(input)) {
        return "We offer progressive overload strength training. Want to build muscle?";
    } 
    else if (/\b(weight loss|fat burn|shred)\b/.test(input)) {
        return "We offer customized fat loss programs. Would you like a free consultation?";
    } 
    else if (/\b(cardio|endurance|stamina)\b/.test(input)) {
        return "We have HIIT and endurance training sessions. Want to boost stamina?";
    } 
    else if (/\b(yoga|meditation|flexibility)\b/.test(input)) {
        return "We offer yoga classes for relaxation and flexibility.";
    } 
    else if (/\b(powerlifting|deadlift|bench press)\b/.test(input)) {
        return "Yes! We have a specialized powerlifting section.";
    } 
    else if (/\b(calisthenics|bodyweight training)\b/.test(input)) {
        return "Yes! We have calisthenics training areas with bars and rings.";
    } 
    else if (/\b(bootcamp|outdoor training)\b/.test(input)) {
        return "We organize outdoor boot camps for high-intensity training.";
    } 
    else if (/\b(boxing|mma|self-defense)\b/.test(input)) {
        return "We offer boxing and self-defense classes.";
    } 
    else if (/\b(hiit|interval training)\b/.test(input)) {
        return "We have high-intensity interval training (HIIT) programs.";
    } 
    // CONTACT
    else if (/\b(location|address|find)\b/.test(input)) {
        return "We are located at XYZ Street, near ABC Mall.";
    } 
    else if (/\b(contact|phone|email|support)\b/.test(input)) {
        return "You can reach us at +91 9876543210 or support@gymbot.com.";
    } 
    else if (/\b(hours|timings|open|closing)\b/.test(input)) {
        return "We are open from 5 AM to 10 PM on weekdays and 6 AM to 8 PM on weekends.";
    } 
    else if (/\b(branches|franchise|other locations)\b/.test(input)) {
        return "We have multiple branches. Let me know your location!";
    } 
    else if (/\b(guest pass|friend pass)\b/.test(input)) {
        return "Members can bring a friend using a guest pass once a month.";
    } 
    else if (/\b(appointment|visit|book)\b/.test(input)) {
        return "You can book a session online or visit our gym.";
    } 
    else if (/\b(review|feedback)\b/.test(input)) {
        return "We appreciate your feedback! You can leave a review on Google or our website.";
    } 
    else if (/\b(social media|instagram|facebook)\b/.test(input)) {
        return "Follow us on Instagram and Facebook for updates!";
    } 
    // SUGGESTED QUESTIONS
    else if (/\b(options|choices|compare)\b/.test(input)) {
        return "We offer multiple options for training and membership. What are you looking for?";
    } 
    else if (/\b(best time|when to visit|crowd)\b/.test(input)) {
        return "Mornings and evenings are the most popular times. Do you prefer a quiet time?";
    } 
    else if (/\b(start|beginner|first time)\b/.test(input)) {
        return "If you're a beginner, our trainers will guide you through a basic workout plan.";
    } 
    else if (/\b(progress|track|logs)\b/.test(input)) {
        return "Yes! We offer progress tracking tools and fitness assessments.";
    } 
    else if (/\b(custom|goal|tailored)\b/.test(input)) {
        return "Yes! We can create a custom workout plan based on your needs.";
    } 
    else if (/\b(weekend classes|sunday open)\b/.test(input)) {
        return "Yes! We are open on weekends with special workout sessions.";
    } 
    // ONE-WORD QUESTIONS
    else if (/\b(reach)\b/.test(input)) {
        return "You can contact us at +91 9876543210 or email support@gymbot.com.";
    } 
    else if (/\b(nation)\b/.test(input)) {
        return "We are expanding our branches across the nation. Interested in a location?";
    } 
    else if (/\b(coach)\b/.test(input)) {
        return "Yes! Our trainers are certified professionals.";
    } 
    else if (/\b(equipments)\b/.test(input)) {
        return "We have treadmills, free weights, squat racks, and more.";
    } 
    else if (/\b(trial)\b/.test(input)) {
        return "We offer a one-day free trial. Would you like to book it?";
    } else if (/\b(membership|subscribe|join|plans)\b/.test(input)) {
        return "We have Basic, Premium, and VIP memberships. Which one interests you?";
    } 
    else if (/\b(cost|price|fee|charge)\b/.test(input)) {
        return "Our membership costs vary by plan. Do you want monthly or yearly details?";
    } 
    else if (/\b(trial|free session|one-day pass)\b/.test(input)) {
        return "Yes! We offer a one-day free trial. Would you like to book it?";
    } 
    else if (/\b(family|couple|group membership)\b/.test(input)) {
        return "We offer family and couple membership discounts. Need details?";
    } 
    else if (/\b(lifetime|long-term membership)\b/.test(input)) {
        return "Yes! We have long-term membership options. Want to check them out?";
    } 
    else if (/\b(student|corporate|military discount)\b/.test(input)) {
        return "Yes! We have special discounts for students, corporate members, and military personnel.";
    } 
    else if (/\b(cancel|pause|freeze membership)\b/.test(input)) {
        return "You can pause or cancel under specific conditions. Would you like more details?";
    } 
    // SERVICES
    else if (/\b(services|facilities|features|options)\b/.test(input)) {
        return "We offer personal training, group classes, weight training, and more. Need specifics?";
    } 
    else if (/\b(lockers|storage|security)\b/.test(input)) {
        return "Yes, we provide secure lockers for members.";
    } 
    else if (/\b(showers|washrooms|hygiene|changing rooms)\b/.test(input)) {
        return "Yes, we have clean showers and changing rooms.";
    } 
    else if (/\b(spa|sauna|steam|jacuzzi)\b/.test(input)) {
        return "Yes! We have a spa, sauna, and steam room for relaxation.";
    } 
    // TRAINING
    else if (/\b(training|workout|exercise|regimen)\b/.test(input)) {
        return "We provide strength training, HIIT, endurance, and more. Need a custom plan?";
    } 
    else if (/\b(weight loss|fat burn|cutting)\b/.test(input)) {
        return "We offer customized fat loss programs. Would you like a free consultation?";
    } 
    else if (/\b(strength|bodybuilding|muscle gain)\b/.test(input)) {
        return "We have progressive overload strength training. Want a program recommendation?";
    } 
    else if (/\b(cardio|stamina|HIIT|treadmill)\b/.test(input)) {
        return "We have HIIT, running, and endurance training sessions.";
    } 
    else if (/\b(yoga|meditation|flexibility|pilates)\b/.test(input)) {
        return "We offer yoga and meditation sessions for relaxation and flexibility.";
    } 
    else if (/\b(powerlifting|bench press|squat|deadlift)\b/.test(input)) {
        return "Yes! We have a dedicated powerlifting section with expert trainers.";
    } 
    else if (/\b(calisthenics|bodyweight training|gymnastics)\b/.test(input)) {
        return "Yes! We have a calisthenics training area with bars and rings.";
    } 
    // SUPPLEMENTS
    else if (/\b(supplements|protein|creatine|bcaa)\b/.test(input)) {
        return "We offer certified supplements. Which type are you looking for?";
    } 
    else if (/\b(pre-workout|energy boost)\b/.test(input)) {
        return "Pre-workouts help boost energy. Want recommendations?";
    } 
    else if (/\b(post-workout|recovery drink)\b/.test(input)) {
        return "Post-workout supplements help recovery. Need suggestions?";
    } 
    else if (/\b(protein|whey|isolate|casein)\b/.test(input)) {
        return "We have whey, casein, and plant-based proteins. Need guidance?";
    } 
    else if (/\b(creatine|strength boost)\b/.test(input)) {
        return "Creatine helps with strength and endurance. Want dosage details?";
    } 
    else if (/\b(bcaa|amino acids|recovery)\b/.test(input)) {
        return "BCAAs help muscle recovery. Would you like the best options?";
    } 
    else if (/\b(multivitamins|omega-3|fish oil)\b/.test(input)) {
        return "Multivitamins support overall health. Looking for daily essentials?";
    } 
    // CONTACT
    else if (/\b(location|address|find|directions)\b/.test(input)) {
        return "We are located at XYZ Street, near ABC Mall.";
    } 
    else if (/\b(contact|phone|email|support)\b/.test(input)) {
        return "You can reach us at +91 9876543210 or support@gymbot.com.";
    } 
    else if (/\b(hours|timings|open|closing)\b/.test(input)) {
        return "We are open from 5 AM to 10 PM on weekdays and 6 AM to 8 PM on weekends.";
    } 
    else if (/\b(branches|franchise|other locations)\b/.test(input)) {
        return "We have multiple branches. Let me know your city!";
    } 
    else if (/\b(review|feedback|rating)\b/.test(input)) {
        return "We appreciate feedback! You can leave a review on Google or our website.";
    } 
    // ONE-WORD QUESTIONS
    else if (/\b(reach)\b/.test(input)) {
        return "You can contact us at +91 9876543210 or email support@gymbot.com.";
    } 
    else if (/\b(nation)\b/.test(input)) {
        return "We are expanding across the nation. Interested in our locations?";
    } 
    else if (/\b(coach)\b/.test(input)) {
        return "Yes! Our trainers are certified professionals.";
    } 
    else if (/\b(trial)\b/.test(input)) {
        return "We offer a one-day free trial. Would you like to book it?";
    } 
    else if (/\b(community)\b/.test(input)) {
        return "We have a strong fitness community. Would you like to join our groups?";
    } 
    else if (/\b(challenge)\b/.test(input)) {
        return "We host fitness challenges every month. Want to participate?";
    } 
    else if (/\b(deals)\b/.test(input)) {
        return "We have special discounts this month. Want details?";
    } 
    else if (/\b(promo)\b/.test(input)) {
        return "We run seasonal promotions. Want to check them out?";
    } 
    else if (/\b(recovery)\b/.test(input)) {
        return "Recovery is crucial! We offer post-workout recovery plans.";
    } 
    else if (/\b(muscles)\b/.test(input)) {
        return "We have targeted muscle-building workouts. Want a guide?";
    } 
    else if (/\b(cutting)\b/.test(input)) {
        return "Cutting phase workouts are available. Would you like meal tips too?";
    } 
    else if (/\b(gains)\b/.test(input)) {
        return "For maximum gains, we suggest progressive overload and proper nutrition.";
    } 
    else if (/\b(plateau|not making progress|stuck in gym)\b/.test(input)) {
        return "If you're stuck, try changing your routine, increasing weights, adjusting diet, or taking a deload week.";
    }
    else if (/\b(how much protein do I need|protein intake)\b/.test(input)) {
        return "A general rule is 1.6-2.2g of protein per kg of body weight, depending on your goal.";
    }
    else if (/\b(soreness|muscle pain|DOMS)\b/.test(input)) {
        return "Muscle soreness is normal! Stay hydrated, stretch, and try light movement to recover.";
    }
    else if (/\b(what is HIIT|HIIT workouts)\b/.test(input)) {
        return "HIIT (High-Intensity Interval Training) is a fast-paced workout style that burns fat quickly.";
    }
    else if (/\b(meditation|mental health|gym and stress)\b/.test(input)) {
        return "Exercise helps reduce stress and improve mental health. Meditation and deep breathing also help.";
    }
    else if (/\b(yoga|flexibility training)\b/.test(input)) {
        return "Yes! We offer yoga and flexibility sessions to improve mobility.";
    }
    else if (/\b(home gym|workout at home)\b/.test(input)) {
        return "If you prefer home workouts, we can provide a plan with bodyweight exercises.";
    }
    else if (/\b(best supplements for beginners|do I need supplements)\b/.test(input)) {
        return "Supplements aren’t necessary but can help. Protein powder, creatine, and multivitamins are common choices.";
    }
    else if (/\b(best diet for weight loss|how to lose fat)\b/.test(input)) {
        return "A calorie deficit is key. Focus on whole foods, high protein, and avoid processed sugars.";
    }
    else if (/\b(alcohol and fitness|can I drink and still get fit)\b/.test(input)) {
        return "Alcohol affects muscle recovery and performance. Moderation is key if you're working towards fitness goals.";
    }
    else if (/\b(difference between fat loss and weight loss)\b/.test(input)) {
        return "Fat loss is losing body fat, while weight loss includes muscle and water loss too. Aim for fat loss!";
    }
    else if (/\b(strength training vs hypertrophy|what’s better)\b/.test(input)) {
        return "Strength training focuses on lifting heavier, while hypertrophy builds muscle size. Both are important!";
    }
    else if (/\b(proper squat form|how to squat correctly)\b/.test(input)) {
        return "Keep your back straight, knees aligned with toes, and go to parallel or lower. Engage your core!";
    }
    else if (/\b(can I lift weights every day|is it bad to lift daily)\b/.test(input)) {
        return "It depends on recovery and workout split. Listen to your body and include rest days.";
    }
    else if (/\b(what is overtraining|am I overtraining)\b/.test(input)) {
        return "Overtraining leads to fatigue, weakness, and poor recovery. Rest is just as important as training!";
    }
    else if (/\b(how to improve posture|posture correction)\b/.test(input)) {
        return "Strengthening your core and back muscles helps. Focus on mobility and avoid slouching.";
    }
    else if (/\b(push vs pull vs legs|PPL workout split)\b/.test(input)) {
        return "PPL (Push, Pull, Legs) is a great training split focusing on different muscle groups each session.";
    }
    else if (/\b(what is time under tension|TUT training)\b/.test(input)) {
        return "Time Under Tension (TUT) refers to how long your muscles are under strain during a set. Slow reps increase TUT.";
    }
    else if (/\b(difference between fasted and fed workouts)\b/.test(input)) {
        return "Fasted workouts can help burn fat, while fed workouts give more energy. Choose based on your goals.";
    }
    else if (/\b(how to grow arms|best arm exercises)\b/.test(input)) {
        return "Focus on progressive overload with bicep curls, triceps dips, and compound lifts like rows and presses.";
    }
    else if (/\b(benefits of deadlifts|why should I deadlift)\b/.test(input)) {
        return "Deadlifts build total body strength, improve posture, and increase core stability.";
    }
    else if (/\b(how to stay motivated|gym motivation)\b/.test(input)) {
        return "Set goals, track progress, switch workouts, and remind yourself why you started!";
    }
    else if (/\b(caffeine before workout|does coffee help in gym)\b/.test(input)) {
        return "Yes, caffeine boosts focus and endurance. A cup of coffee before workouts can help!";
    }
    else if (/\b(best ab exercises|how to get abs)\b/.test(input)) {
        return "Abs are made in the kitchen! Combine a clean diet with planks, leg raises, and crunch variations.";
    }
    else if (/\b(does sweating burn fat|is sweating good)\b/.test(input)) {
        return "Sweating cools your body, but it doesn’t mean you’re burning fat. Focus on diet and exercise!";
    }
    else if (/\b(six-pack abs|how long does it take to get abs)\b/.test(input)) {
        return "Getting abs depends on your body fat percentage. A lean diet and core training help reveal them.";
    }
    else if (/\b(is running enough for weight loss|should I only run)\b/.test(input)) {
        return "Running helps, but combining it with strength training and diet control is best for weight loss.";
    }
    else if (/\b(gym etiquette|rules in gym)\b/.test(input)) {
        return "Wipe equipment after use, re-rack weights, don’t hog machines, and respect others’ space!";
    }
    else if (/\b(senior citizen discount|elderly discount)\b/.test(input)) {
        return "Yes, we offer special discounts for senior citizens. Please contact our front desk for more details.";
    }
    else if (/\b(vacation hold|pause membership|freeze membership)\b/.test(input)) {
        return "Yes, you can put your membership on hold for a certain period. Please visit us to discuss options.";
    }
    else if (/\b(can I bring a friend|guest pass)\b/.test(input)) {
        return "Yes! We offer guest passes. Your friend can join for a trial session.";
    }
    else if (/\b(what are the membership plans|gym membership cost)\b/.test(input)) {
        return "We offer Basic, Premium, and VIP memberships. Want to compare the benefits of each?";
    }
    else if (/\b(what is included in the membership|membership benefits)\b/.test(input)) {
        return "It depends on your plan! Basic includes gym access, Premium adds group classes, and VIP includes personal training. Want pricing details?";
    }
    else if (/\b(can I freeze my membership|pause gym membership)\b/.test(input)) {
        return "Yes, you can pause your membership for up to 3 months. Need help with the process?";
    }
    else if (/\b(do you offer free trials|can I try before I buy)\b/.test(input)) {
        return "Yes! We offer a 3-day free trial. Want to book yours now?";
    }
    else if (/\b(how to cancel my membership|cancel gym membership)\b/.test(input)) {
        return "You can cancel anytime via the app or by visiting the front desk. Need help with the cancellation process?";
    }
    else if (/\b(what training programs do you offer|gym training programs)\b/.test(input)) {
        return "We offer strength training, fat loss, endurance, and sports performance programs. Need help choosing the best one for you?";
    }
    else if (/\b(what is the best workout for beginners|beginner gym program)\b/.test(input)) {
        return "A mix of full-body strength and cardio works best. Want a 4-week beginner workout plan?";
    }
    else if (/\b(can I get a custom workout plan|personalized training program)\b/.test(input)) {
        return "Yes! Our trainers can create a plan based on your goals. Want to book a consultation?";
    }
    else if (/\b(how to track progress in the gym|best way to measure fitness progress)\b/.test(input)) {
        return "You can track progress using strength logs, body measurements, and performance tests. Want a guide on how to track effectively?";
    }
    else if (/\b(do you offer online training|virtual fitness coaching)\b/.test(input)) {
        return "Yes, we offer online coaching and live workout sessions. Want to sign up for a free trial?";
    }
    else if (/\b(how to contact the gym|gym contact details)\b/.test(input)) {
        return "You can reach us via phone, email, or visit our front desk. Want our contact info now?";
    }
    else if (/\b(where is the gym located|gym location)\b/.test(input)) {
        return "We’re located at [Gym Address]. Need directions or parking details?";
    }
    else if (/\b(how to book an appointment|schedule a consultation)\b/.test(input)) {
        return "You can book online through our website or app. Want the booking link?";
    }
    else if (/\b(do you have customer support|how to reach customer service)\b/.test(input)) {
        return "Yes, our support team is available 24/7 via chat and email. Need help with something specific?";
    }
    else if (/\b(how to give feedback|leave a review for the gym)\b/.test(input)) {
        return "We’d love your feedback! You can leave a review on Google or our website. Want the link?";
    }
            
    else if (/\b(best time to workout|morning vs evening workout)\b/.test(input)) {
        return "The best time depends on your schedule! Morning workouts boost energy, while evening workouts relieve stress.";
    }
    else if (/\b(bulking|how to bulk|gain muscle fast)\b/.test(input)) {
        return "To bulk up, focus on progressive overload, eat a calorie surplus, and ensure sufficient protein intake.";
    }
    else if (/\b(pre-workout|what to eat before gym)\b/.test(input)) {
        return "A good pre-workout meal includes carbs and protein, like a banana with peanut butter or oatmeal.";
    }
    else if (/\b(post-workout|what to eat after gym)\b/.test(input)) {
        return "A protein-rich meal is ideal after workouts. Try a protein shake, chicken with rice, or Greek yogurt.";
    }
    else if (/\b(heart rate monitor|track heart rate)\b/.test(input)) {
        return "Yes, we provide heart rate monitoring equipment and recommend fitness trackers.";
    }
    else if (/\b(workout duration|how long should I workout)\b/.test(input)) {
        return "A workout can be 45-90 minutes depending on your goal. Quality over quantity!";
    }
    else if (/\b(does cardio burn muscle|cardio vs weights)\b/.test(input)) {
        return "Excessive cardio without enough food can burn muscle. Balance strength and cardio for best results.";
    }
    else if (/\b(is weightlifting safe|safety in gym)\b/.test(input)) {
        return "Weightlifting is safe if done with proper form. Always warm up and use correct technique.";
    }
    else if (/\b(gym anxiety|nervous to start gym)\b/.test(input)) {
        return "It’s normal to feel nervous! Start slow, focus on yourself, and remember everyone started somewhere.";
    }
    else if (/\b(plateau|not making progress|stuck in gym)\b/.test(input)) {
        return "If you're stuck, try changing your routine, increasing weights, adjusting diet, or taking a deload week.";
    }
    else if (/\b(how much protein do I need|protein intake)\b/.test(input)) {
        return "A general rule is 1.6-2.2g of protein per kg of body weight, depending on your goal.";
    }
    else if (/\b(soreness|muscle pain|DOMS)\b/.test(input)) {
        return "Muscle soreness is normal! Stay hydrated, stretch, and try light movement to recover.";
    }
    else if (/\b(what is HIIT|HIIT workouts)\b/.test(input)) {
        return "HIIT (High-Intensity Interval Training) is a fast-paced workout style that burns fat quickly.";
    }
    else if (/\b(meditation|mental health|gym and stress)\b/.test(input)) {
        return "Exercise helps reduce stress and improve mental health. Meditation and deep breathing also help.";
    }
    else if (/\b(yoga|flexibility training)\b/.test(input)) {
        return "Yes! We offer yoga and flexibility sessions to improve mobility.";
    }
    else if (/\b(home gym|workout at home)\b/.test(input)) {
        return "If you prefer home workouts, we can provide a plan with bodyweight exercises.";
    }
    else if (/\b(best supplements for beginners|do I need supplements)\b/.test(input)) {
        return "Supplements aren’t necessary but can help. Protein powder, creatine, and multivitamins are common choices.";
    }
    else if (/\b(best diet for weight loss|how to lose fat)\b/.test(input)) {
        return "A calorie deficit is key. Focus on whole foods, high protein, and avoid processed sugars.";
    }
    else if (/\b(alcohol and fitness|can I drink and still get fit)\b/.test(input)) {
        return "Alcohol affects muscle recovery and performance. Moderation is key if you're working towards fitness goals.";
    }
    else if (/\b(difference between fat loss and weight loss)\b/.test(input)) {
        return "Fat loss is losing body fat, while weight loss includes muscle and water loss too. Aim for fat loss!";
    }
    else if (/\b(strength training vs hypertrophy|what’s better)\b/.test(input)) {
        return "Strength training focuses on lifting heavier, while hypertrophy builds muscle size. Both are important!";
    }
    else if (/\b(what are the membership plans|gym membership cost)\b/.test(input)) {
        return "We offer Basic, Premium, and VIP memberships. Want to compare the benefits of each?";
    }
    else if (/\b(what is included in the membership|membership benefits)\b/.test(input)) {
        return "It depends on your plan! Basic includes gym access, Premium adds group classes, and VIP includes personal training. Want pricing details?";
    }
    else if (/\b(can I freeze my membership|pause gym membership)\b/.test(input)) {
        return "Yes, you can pause your membership for up to 3 months. Need help with the process?";
    }
    else if (/\b(do you offer free trials|can I try before I buy)\b/.test(input)) {
        return "Yes! We offer a 3-day free trial. Want to book yours now?";
    }
    else if (/\b(how to cancel my membership|cancel gym membership)\b/.test(input)) {
        return "You can cancel anytime via the app or by visiting the front desk. Need help with the cancellation process?";
    }
    
    else if (/\b(proper squat form|how to squat correctly)\b/.test(input)) {
        return "Keep your back straight, knees aligned with toes, and go to parallel or lower. Engage your core!";
    }
    else if (/\b(can I lift weights every day|is it bad to lift daily)\b/.test(input)) {
        return "It depends on recovery and workout split. Listen to your body and include rest days.";
    }
    else if (/\b(what is overtraining|am I overtraining)\b/.test(input)) {
        return "Overtraining leads to fatigue, weakness, and poor recovery. Rest is just as important as training!";
    }
    else if (/\b(how to improve posture|posture correction)\b/.test(input)) {
        return "Strengthening your core and back muscles helps. Focus on mobility and avoid slouching.";
    }
    else if (/\b(push vs pull vs legs|PPL workout split)\b/.test(input)) {
        return "PPL (Push, Pull, Legs) is a great training split focusing on different muscle groups each session.";
    }
    else if (/\b(what is time under tension|TUT training)\b/.test(input)) {
        return "Time Under Tension (TUT) refers to how long your muscles are under strain during a set. Slow reps increase TUT.";
    }
    else if (/\b(difference between fasted and fed workouts)\b/.test(input)) {
        return "Fasted workouts can help burn fat, while fed workouts give more energy. Choose based on your goals.";
    }
    else if (/\b(how to grow arms|best arm exercises)\b/.test(input)) {
        return "Focus on progressive overload with bicep curls, triceps dips, and compound lifts like rows and presses.";
    }
    else if (/\b(benefits of deadlifts|why should I deadlift)\b/.test(input)) {
        return "Deadlifts build total body strength, improve posture, and increase core stability.";
    }
    else if (/\b(how to stay motivated|gym motivation)\b/.test(input)) {
        return "Set goals, track progress, switch workouts, and remind yourself why you started!";
    }
    else if (/\b(caffeine before workout|does coffee help in gym)\b/.test(input)) {
        return "Yes, caffeine boosts focus and endurance. A cup of coffee before workouts can help!";
    }
    else if (/\b(what supplements should I take|best supplements for beginners)\b/.test(input)) {
        return "It depends on your goal. Are you looking for muscle gain, fat loss, or general health?"; 
    }
    else if (/\b(muscle gain supplements|best supplements for muscle growth)\b/.test(input)) {
        return "For muscle growth, consider whey protein, creatine, and BCAAs. Do you want to know the best time to take them?";
    }
    else if (/\b(fat loss supplements|best supplements for weight loss)\b/.test(input)) {
        return "For fat loss, caffeine, green tea extract, and CLA may help. Want to know how they work?";
    }
    else if (/\b(when to take supplements|best time for supplements)\b/.test(input)) {
        return "It varies! Whey is best post-workout, creatine anytime, and pre-workout 30 minutes before. Need a detailed guide?";
    }
    else if (/\b(is creatine safe|side effects of creatine)\b/.test(input)) {
        return "Yes, creatine is safe when taken correctly. Want to know how to use it effectively?";
    }
    else if (/\b(do I need BCAAs|BCAA vs whey)\b/.test(input)) {
        return "If you consume enough protein, BCAAs aren't necessary. Want a comparison of whey vs casein?";
    }
    else if (/\b(is pre-workout good|should I take pre-workout)\b/.test(input)) {
        return "Pre-workouts can boost energy, but they may cause jitters. Want recommendations for stimulant-free options?";
    }
    else if (/\b(are supplements necessary|can I build muscle without supplements)\b/.test(input)) {
        return "No, you can build muscle with proper nutrition. Want to know how to optimize your diet instead?";
    }
    else if (/\b(what are natural alternatives to supplements)\b/.test(input)) {
        return "Foods like eggs, chicken, and nuts provide natural nutrients. Want a full food-based nutrition plan?";
    }
    else if (/\b(how much protein do I need|protein intake per day)\b/.test(input)) {
        return "It depends on your weight and goal. Want a protein calculator to find your exact requirement?";
    }
    else if (/\b(what is the best protein powder|which protein brand is best)\b/.test(input)) {
        return "Optimum Nutrition, MyProtein, and Dymatize are great options. Want budget-friendly recommendations?";
    }
    else if (/\b(should I take fish oil|benefits of fish oil)\b/.test(input)) {
        return "Fish oil supports joints and heart health. Want to know the best dosage?";
    }
    else if (/\b(is multivitamin necessary|should I take a multivitamin)\b/.test(input)) {
        return "If your diet lacks nutrients, a multivitamin helps. Want food sources to replace it?";
    }
    else if (/\b(is mass gainer good|should I take a mass gainer)\b/.test(input)) {
        return "Mass gainers work if you're struggling to eat enough. Want tips for gaining weight naturally?";
    }
    else if (/\b(how to boost testosterone naturally|testosterone supplements)\b/.test(input)) {
        return "Healthy fats, strength training, and sleep help. Want a testosterone-boosting diet plan?";
    }
    else if (/\b(are nitric oxide boosters effective|should I take NO boosters)\b/.test(input)) {
        return "They improve blood flow but aren't necessary. Want natural ways to boost nitric oxide?";
    }
    else if (/\b(does caffeine help workouts|caffeine vs pre-workout)\b/.test(input)) {
        return "Caffeine boosts focus and endurance. Want a list of natural pre-workout foods?";
    }
    else if (/\b(should I take ZMA|ZMA benefits)\b/.test(input)) {
        return "ZMA helps with recovery and sleep. Want to know if it's worth it for you?";
    }
    else if (/\b(how to read supplement labels|what to look for in supplements)\b/.test(input)) {
        return "Check ingredients, dosages, and certifications. Want a guide on avoiding fake supplements?";
    }
    
    else if (/\b(best ab exercises|how to get abs)\b/.test(input)) {
        return "Abs are made in the kitchen! Combine a clean diet with planks, leg raises, and crunch variations.";
    }
    else if (/\b(does sweating burn fat|is sweating good)\b/.test(input)) {
        return "Sweating cools your body, but it doesn’t mean you’re burning fat. Focus on diet and exercise!";
    }
    else if (/\b(six-pack abs|how long does it take to get abs)\b/.test(input)) {
        return "Getting abs depends on your body fat percentage. A lean diet and core training help reveal them.";
    }
    else if (/\b(is running enough for weight loss|should I only run)\b/.test(input)) {
        return "Running helps, but combining it with strength training and diet control is best for weight loss.";
    }
    else if (/\b(gym etiquette|rules in gym)\b/.test(input)) {
        return "Wipe equipment after use, re-rack weights, don’t hog machines, and respect others’ space!";
    }
    
    else if (/\b(what supplements should I take|best supplements for beginners)\b/.test(input)) {
        return "For beginners, protein powder, creatine, multivitamins, and fish oil are good choices.";
    }
    else if (/\b(is protein powder necessary|do I need protein powder)\b/.test(input)) {
        return "Protein powder isn’t necessary, but it helps if you struggle to get enough protein from food.";
    }
    else if (/\b(when to take protein|best time for protein)\b/.test(input)) {
        return "You can take protein anytime! Post-workout is ideal for muscle recovery, but overall intake matters most.";
    }
    else if (/\b(whey vs casein|difference between whey and casein)\b/.test(input)) {
        return "Whey digests quickly and is great post-workout, while casein digests slowly, making it ideal before bed.";
    }
    else if (/\b(what is creatine|is creatine safe|benefits of creatine)\b/.test(input)) {
        return "Creatine helps improve strength, endurance, and muscle recovery. It’s one of the most researched and safe supplements.";
    }
    else if (/\b(when to take creatine|best time for creatine)\b/.test(input)) {
        return "You can take creatine anytime, but post-workout with a meal may maximize absorption.";
    }
    else if (/\b(does creatine cause bloating|side effects of creatine)\b/.test(input)) {
        return "Creatine can cause slight water retention in muscles, but it’s temporary and not harmful.";
    }
    else if (/\b(should I cycle creatine|creatine cycle)\b/.test(input)) {
        return "Creatine does not need to be cycled. You can take it daily for long-term benefits.";
    }
    else if (/\b(pre-workout benefits|should I take pre-workout)\b/.test(input)) {
        return "Pre-workouts boost energy and focus. They contain caffeine, beta-alanine, and nitric oxide boosters.";
    }
    else if (/\b(side effects of pre-workout|is pre-workout safe)\b/.test(input)) {
        return "Some pre-workouts can cause jitters, increased heart rate, or tingling (from beta-alanine). Start with a small dose.";
    }
    else if (/\b(what is BCAA|do I need BCAA)\b/.test(input)) {
        return "BCAAs (Branched-Chain Amino Acids) help with muscle recovery but aren’t necessary if you get enough protein.";
    }
    else if (/\b(BCAA vs whey protein|difference between BCAA and protein)\b/.test(input)) {
        return "Whey protein provides all essential amino acids, while BCAAs only have three. If you get enough protein, BCAAs aren’t needed.";
    }
    else if (/\b(fish oil benefits|should I take fish oil)\b/.test(input)) {
        return "Fish oil supports heart health, reduces inflammation, and improves joint mobility. It’s great for overall well-being.";
    }
    else if (/\b(what is glutamine|should I take glutamine)\b/.test(input)) {
        return "Glutamine aids recovery and gut health, but if you eat a protein-rich diet, supplementation is optional.";
    }
    else if (/\b(vitamin D for fitness|does vitamin D help with workouts)\b/.test(input)) {
        return "Vitamin D supports bone health, muscle function, and testosterone levels. If you lack sun exposure, supplementation is helpful.";
    }
    else if (/\b(multivitamin benefits|do I need a multivitamin)\b/.test(input)) {
        return "A multivitamin helps cover nutrient gaps but should not replace a balanced diet.";
    }
    else if (/\b(should I take ZMA|ZMA benefits)\b/.test(input)) {
        return "ZMA (Zinc, Magnesium, Vitamin B6) helps with muscle recovery, sleep quality, and testosterone production.";
    }
    else if (/\b(does caffeine help workouts|caffeine before gym)\b/.test(input)) {
        return "Yes, caffeine can improve focus, endurance, and performance. A cup of coffee or pre-workout supplement works well.";
    }
    else if (/\b(does taking supplements make me bulky|do supplements build muscle)\b/.test(input)) {
        return "Supplements support your diet but don’t build muscle on their own. Proper training and nutrition are key.";
    }
    else if (/\b(are supplements steroids|is creatine a steroid)\b/.test(input)) {
        return "No, supplements like protein and creatine are natural. Steroids are synthetic hormones with different effects.";
    }
    else if (/\b(how to choose the right supplement|what supplement brand is best)\b/.test(input)) {
        return "Look for third-party tested brands with minimal additives. Trusted brands include Optimum Nutrition, MyProtein, and Transparent Labs.";
    }
    else if (/\b(are mass gainers good|should I take a mass gainer)\b/.test(input)) {
        return "Mass gainers are high-calorie protein shakes. They help if you struggle to eat enough food, but whole foods are better.";
    }
    else if (/\b(what are nitric oxide boosters|NO booster benefits)\b/.test(input)) {
        return "Nitric oxide boosters improve blood flow and pumps during workouts, helping with endurance and recovery.";
    }
    else if (/\b(what is beta-alanine|should I take beta-alanine)\b/.test(input)) {
        return "Beta-alanine helps with endurance and delays muscle fatigue. It can cause a tingling sensation but is safe.";
    }
    else if (/\b(what is L-carnitine|does L-carnitine help with fat loss)\b/.test(input)) {
        return "L-carnitine may help with fat metabolism and energy production, but diet and exercise are more important for fat loss.";
    }
    else if (/\b(does collagen help with muscle recovery|should I take collagen)\b/.test(input)) {
        return "Collagen supports joint health and skin elasticity. It’s useful for injury prevention and recovery.";
    }
    else if (/\b(how much water should I drink with creatine|does creatine dehydrate you)\b/.test(input)) {
        return "Creatine does not dehydrate you, but staying hydrated is important. Aim for at least 3-4 liters of water daily.";
    }
    else if (/\b(are herbal supplements good for bodybuilding|should I take herbal supplements)\b/.test(input)) {
        return "Some herbal supplements like ashwagandha and Rhodiola rosea can support recovery and stress management.";
    }
    else if (/\b(what is ashwagandha|benefits of ashwagandha)\b/.test(input)) {
        return "Ashwagandha is an adaptogen that reduces stress, boosts testosterone, and improves strength.";
    }
    else if (/\b(what is turmeric good for|should I take turmeric for recovery)\b/.test(input)) {
        return "Turmeric has anti-inflammatory properties that can help with joint pain and recovery.";
    }
    else if (/\b(can I take multiple supplements together|which supplements can I combine)\b/.test(input)) {
        return "Yes, many supplements work well together. A common stack includes protein, creatine, fish oil, and multivitamins.";
    }
    else if (/\b(what is the best supplement for endurance|supplements for runners)\b/.test(input)) {
        return "Beta-alanine, electrolytes, and caffeine are great for endurance athletes.";
    }
    else if (/\b(are natural supplements better than synthetic|should I take natural supplements)\b/.test(input)) {
        return "Natural supplements often have fewer additives, but both can be effective. Always check ingredient quality.";
    }
    else if (/\b(does apple cider vinegar help with weight loss|should I take ACV for fat loss)\b/.test(input)) {
        return "Apple cider vinegar may help control appetite, but it won’t cause significant weight loss alone.";
    }
    else if (/\b(should I take testosterone boosters|do test boosters work)\b/.test(input)) {
        return "Most testosterone boosters have minimal impact unless you have a deficiency. Strength training and proper sleep help more.";
    }
    else {
        return "I'm not sure about that. Can you ask something related to gym services, training, or membership?";
    }
}
