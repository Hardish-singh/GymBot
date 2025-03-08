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
    } else if (/\bservices\b/.test(input)) {
        return "We offer web development, cybersecurity, and AI solutions.";
    } 
    else if(input.includes("love")){
        return "yes i love you ";
    }
    else if(input.includes("well prepair")){
        return "yeah my developer is well prepared";
    }
    else if(input.includes("right")){
        return "yes you are always right";
    }
    else if(input.includes("write")){
        return "yes i love to  write ";
    }
    else if(input.includes("raghav")){
        return "welcome raghav i recogonise you";
    }

    else {
        return "Sorry, I don't understand that.";
    }
}
