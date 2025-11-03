import requests
from django.http import JsonResponse
from .models import Review

def analyze_review(request):
    text = request.GET.get("text", "")
    if not text:
        return JsonResponse({"error": "No text provided"}, status=400)

    # Send text to FastAPI ML service
    try:
        res = requests.post("http://127.0.0.1:8000/analyze", json={"text": text})
        data = res.json()
    except Exception as e:
        return JsonResponse({"error": f"Failed to connect to ML service: {str(e)}"}, status=500)

    # Save result to database (including sentiment)
    Review.objects.create(
        text=text,
        language=data.get("language"),
        translated=data.get("translated"),
        sentiment=data.get("sentiment"),     # 👈 Make sure this line exists
        confidence=data.get("confidence")
    )

    # Return result to user
    return JsonResponse(data)
