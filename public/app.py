from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

app.static_folder = 'static'


chatbot_data = {
    
    "greetings": {
        "patterns": ["hi", "hello", "hey"],
        "responses": ["Hello!", "Hi there!", "Hey!"]
    },
    "goodbye": {
        "patterns": ["bye", "goodbye", "see you later"],
        "responses": ["Goodbye!", "See you later!", "Bye!"]
    },
    "stress_testing": {
        "patterns": ["stressed", "stress", "feeling overwhelmed"],
        "responses": ["Take a deep breath. It's okay to feel stressed sometimes.", 
                      "Remember to take breaks and prioritize self-care.",
                      "You're not alone. Reach out to someone you trust for support."]
    },
    "anger_testing": {
        "patterns": ["angry", "frustrated", "mad"],
        "responses": ["It's okay to feel angry, but try to find healthy ways to express and manage your emotions.",
                      "Take a moment to pause and reflect before reacting.",
                      "Deep breaths can help calm intense emotions. You've got this!"]
    },
    "lovelife_breakup": {
        "patterns": ["breakup", "left me", "relationship ended"],
        "responses": ["I'm sorry to hear that. Breakups can be tough, but remember that you're not alone.",
                      "Give yourself time to grieve and heal. It's okay to feel sad.",
                      "Focus on self-care and doing things that make you happy. Surround yourself with supportive friends and family."]
    },
    "rehabilitation": {
        "patterns": ["rehabilitation", "recovery", "getting better"],
        "responses": ["Rehabilitation is a journey, and you're making progress every day.",
                      "Stay focused on your goals and celebrate even the smallest victories.",
                      "You're stronger than you know. Keep pushing forward and never give up."]
    },
    "motivation": {
        "patterns": ["motivation", "feeling down", "need inspiration"],
        "responses": ["Believe in yourself. You have the power to overcome any challenge.",
                      "Think about what inspires you and hold onto that feeling.",
                      "You're capable of achieving amazing things. Don't let doubt hold you back."]
    },
    "anxiety_relief": {
        "patterns": ["anxious", "anxiety", "feeling nervous"],
        "responses": ["Take slow, deep breaths. Inhale calmness, exhale tension.",
                      "Focus on the present moment and try grounding techniques like counting or naming objects around you.",
                      "Practice self-compassion. It's okay to feel anxious, and you're doing your best."]
    },
    "career_advice": {
        "patterns": ["job search", "career change", "interview tips"],
        "responses": ["Update your resume and network with professionals in your desired field.",
                      "Consider what skills and experiences you can leverage in a new career path.",
                      "Prepare for interviews by researching the company and practicing common interview questions."]
    },
    "friendship_support": {
        "patterns": ["lonely", "need friends", "social anxiety"],
        "responses": ["Seek out communities with shared interests, both online and offline.",
                      "Be open to new connections and reach out to old friends to reconnect.",
                      "Remember that quality matters more than quantity when it comes to friendships."]
    },
    "family_issues": {
        "patterns": ["family problems", "conflict with relatives", "parenting advice"],
        "responses": ["Communication is key. Try to express your feelings calmly and listen to others.",
                      "Set boundaries and prioritize your well-being in difficult family situations.",
                      "Consider seeking guidance from a therapist or counselor for family-related challenges."]
    },
    "financial_advice": {
        "patterns": ["financial stress", "budgeting tips", "saving money"],
        "responses": ["Create a budget to track your expenses and identify areas where you can save.",
                      "Consider setting financial goals and creating a plan to achieve them.",
                      "Explore resources for financial education and seek advice from a financial advisor if needed."]
    },
    "health_wellness": {
        "patterns": ["healthy lifestyle", "fitness tips", "self-care practices"],
        "responses": ["Prioritize sleep, nutrition, and physical activity for overall well-being.",
                      "Find activities that bring you joy and relaxation, whether it's yoga, meditation, or spending time outdoors.",
                      "Listen to your body and practice self-compassion. Take breaks when needed and seek professional help if you're struggling with your mental or physical health."]
    },
    "academic_support": {
        "patterns": ["study tips", "academic stress", "test anxiety"],
        "responses": ["Break down your study materials into manageable chunks and create a study schedule.",
                      "Practice active learning techniques such as summarizing, teaching others, and applying concepts in real-life scenarios.",
                      "Seek help from teachers, tutors, or academic advisors if you're struggling with specific subjects or assignments."]
    },
    "depression_students": {
        "patterns": ["depressed", "feeling hopeless", "lost motivation"],
        "responses": ["I'm sorry you're feeling this way. It's important to prioritize your mental health.",
                      "Remember that seeking help is a sign of strength, not weakness. Consider reaching out to a counselor or therapist for support.",
                      "You're not alone in this. Many students struggle with similar feelings. It's okay to ask for help and take things one step at a time."]
    },
    "positive_affirmations": {
        "patterns": ["affirmations", "positive mindset", "self-love"],
        "responses": ["You are worthy of love and respect just as you are.",
                      "You have the strength and resilience to overcome any obstacle.",
                      "Every challenge you face is an opportunity for growth and learning."]
    },
    "elderly_support": {
        "patterns": ["lonely", "health concerns", "coping with aging"],
        "responses": ["It's important to stay connected with loved ones and reach out if you're feeling lonely.",
                      "Make sure to prioritize your physical and mental health. Regular exercise and social activities can help improve your well-being.",
                      "Remember that aging is a natural process, and it's okay to ask for help or seek support when needed."]
    },
    "hobby_suggestions": {
        "patterns": ["hobbies for seniors", "creative activities", "leisure ideas"],
        "responses": ["Consider trying activities like gardening, painting, or playing a musical instrument.",
                      "Explore local community centers or senior clubs for group activities and classes.",
                      "Find joy in simple pleasures like reading, birdwatching, or taking leisurely walks."]
    },
    "memory_support": {
        "patterns": ["memory loss", "forgetfulness", "brain exercises"],
        "responses": ["Engage in activities that stimulate the mind, such as puzzles, crosswords, or learning a new language.",
                      "Maintain a healthy lifestyle with regular exercise, nutritious diet, and adequate sleep.",
                      "Stay organized with calendars, reminders, and notes to help manage tasks and appointments."]
    },
    "legacy_reflection": {
        "patterns": ["legacy", "reflecting on life", "sharing wisdom"],
        "responses": ["Take time to reflect on your life experiences and the wisdom you've gained.",
                      "Consider writing down your memories, stories, and life lessons to share with future generations.",
                      "Your legacy is the impact you've made on others and the world. Your presence and contributions are valuable."]
    },
    "meditation_techniques": {
        "patterns": ["meditation techniques", "monk practices", "calmness methods"],
        "responses": ["Monks often practice mindfulness meditation, focusing on the breath to cultivate awareness and presence.",
                      "Breathing exercises such as diaphragmatic breathing or alternate nostril breathing help to regulate the nervous system and induce relaxation.",
                      "Walking meditation involves slow, deliberate walking, focusing on each step and the sensations of movement."]
    },
    "silence_and_solitude": {
        "patterns": ["silence and solitude", "quiet contemplation", "inner peace"],
        "responses": ["Monks observe periods of silence and solitude to quiet the mind and turn inward.",
                      "Nature contemplation, such as spending time in forests or mountains, helps monks connect with the natural world and find inner peace.",
                      "Chanting and mantra repetition create a rhythmic, meditative state, fostering calmness and spiritual insight."]
    },
    "gratitude_practice": {
        "patterns": ["gratitude practice", "thankfulness meditation", "counting blessings"],
        "responses": ["Monks cultivate gratitude through prayers, rituals, and acts of kindness, fostering a sense of abundance and contentment.",
                      "Reflecting on the blessings in life, no matter how small, helps shift focus away from negative thoughts and emotions.",
                      "Gratitude practice strengthens resilience and promotes emotional well-being, even in challenging times."]
    }
    
}


def get_response(message):
    message = message.lower()
    response = "I'm sorry, I don't understand."
    for intent, data in chatbot_data.items():
        for pattern in data['patterns']:
            if pattern in message:
                response = data['responses'][0]  
                break
    return response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['POST'])
def chatbot_api():
    if request.method == 'POST':  
        data = request.get_json()
        if 'message' not in data:
            return jsonify({'error': 'Message parameter is missing'}), 400

        user_message = data['message']
        bot_response = get_response(user_message)
        return jsonify({'message': 'Bot is typing...', 'bot_response': bot_response})
    else:
        return jsonify({'error': 'Method not allowed'}), 405  


if __name__ == '__main__':
    app.run(debug=True)
