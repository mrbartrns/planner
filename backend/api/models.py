from django.db import models

# Create your models here.


class Schedule(models.Model):
    title = models.CharField(max_length=30, verbose_name="제목")
    deadline = models.DateField(null=True)
    uuid = models.CharField(
        max_length=255, verbose_name="uuid", unique=True, default="uuid_field"
    )
    checked = models.BooleanField(verbose_name="check", default=False)
    created_at = models.DateTimeField(verbose_name="created at", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="updated at", auto_now=True)
    is_deleted = models.BooleanField(verbose_name="deleted", default=False)

    class Meta:
        ordering = ["deadline"]

    def __str__(self) -> str:
        return f"title: {self.title}"


class SubSchedule(models.Model):
    title = models.ForeignKey(
        Schedule, on_delete=models.CASCADE, related_name="sub_schedules"
    )
    uuid = models.CharField(
        max_length=255, verbose_name="uuid", unique=True, default="uuid_field"
    )
    subtitle = models.CharField(max_length=30, verbose_name="서브 제목")
    checked = models.BooleanField(verbose_name="체크", default=False)
    created_at = models.DateTimeField(verbose_name="created at", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="updated at", auto_now=True)

    class Meta:
        ordering = ["id"]

    def __str__(self) -> str:
        return f"subtitle: {self.subtitle}"
