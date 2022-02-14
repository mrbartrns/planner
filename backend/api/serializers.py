from rest_framework import serializers
from api.models import Schedule, SubSchedule


class SubScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSchedule
        fields = "__all__"
        extra_kwargs = {"title": {"read_only": True}}


class ScheduleSerializer(serializers.ModelSerializer):
    sub_schedules = SubScheduleSerializer(many=True)

    class Meta:
        model = Schedule
        fields = ("title", "sub_schedules", "checked", "uuid")
        extra_kwargs = {"deadline": {"required": False}}

    def validate(self, attrs):
        return super().validate(attrs)

    def create(self, validated_data):
        sub_schedules = []
        if "sub_schedules" in validated_data:
            sub_schedules = validated_data.pop("sub_schedules")
        schedule = Schedule.objects.create(**validated_data)
        for sub_schedule in sub_schedules:
            sub = SubSchedule(**sub_schedule, title=schedule)
            sub.save()
        return schedule
