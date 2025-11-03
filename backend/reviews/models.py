from django.db import models

class Review(models.Model):
    text = models.TextField()
    language = models.CharField(max_length=10)

    translated = models.TextField()
    sentiment = models.CharField(max_length=10)
    confidence = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.sentiment} ({round(self.confidence,2)})"

        

