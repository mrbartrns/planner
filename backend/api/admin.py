from django.contrib import admin
from api.models import Schedule, SubSchedule

# Register your models here.
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "uuid", "checked", "created_at", "updated_at"]
    list_display_links = ["title", "uuid"]
    readonly_fields = ["uuid"]


admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(SubSchedule, ScheduleAdmin)
