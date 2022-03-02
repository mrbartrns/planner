from django.urls import path
from api.views import ScheduleView, PostSubScheduleView

urlpatterns = [
    path("data", ScheduleView.as_view()),
    path("subschedule", PostSubScheduleView.as_view()),
]
