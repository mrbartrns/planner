from django.urls import path
from api.views import (
    ScheduleView,
    ScheduleDetailView,
    ScheduleUpdateView,
    DeleteSubScheduleView,
    ScheduleDeleteView,
    ScheduleDeleteView,
)


urlpatterns = [
    path("data", ScheduleView.as_view()),
    path("data/<str:uuid>", ScheduleDetailView.as_view()),
    path("data/<str:uuid>/update", ScheduleUpdateView.as_view()),
    path("data/<str:uuid>/delete", ScheduleDeleteView.as_view()),
    path("subschedule/<str:uuid>/delete", DeleteSubScheduleView.as_view()),
]
