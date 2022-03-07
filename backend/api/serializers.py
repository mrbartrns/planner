from rest_framework import serializers
from api.models import Schedule, SubSchedule


class SubScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSchedule
        fields = "__all__"
        extra_kwargs = {
            "title": {"read_only": True},
            "id": {"read_only": True},
        }


class ScheduleSerializer(serializers.ModelSerializer):
    sub_schedules = SubScheduleSerializer(many=True)

    class Meta:
        model = Schedule
        fields = ("title", "sub_schedules", "checked", "uuid", "id")
        extra_kwargs = {"deadline": {"required": False}, "id": {"read_only": True}}

    def create(self, validated_data):
        sub_schedules = []
        if "sub_schedules" in validated_data:
            sub_schedules = validated_data.pop("sub_schedules")
        schedule = Schedule.objects.create(**validated_data)
        for sub_schedule in sub_schedules:
            sub = SubSchedule(**sub_schedule, title=schedule)
            sub.save()
        return schedule

    def update(self, instance, validated_data: dict):
        sub_schedules = []
        if "sub_schedules" in validated_data:
            sub_schedules: list = validated_data.pop("sub_schedules")
        for sub_schedule in sub_schedules:
            sub = SubSchedule.objects.filter(uuid=sub_schedule["uuid"])
            if sub:
                sub[0].subtitle = sub_schedule["subtitle"]
                sub[0].checked = sub_schedule["checked"]
                sub[0].save()
            else:
                sub = SubSchedule(**sub_schedule, title=instance)
                sub.save()
        return super().update(instance, validated_data)
