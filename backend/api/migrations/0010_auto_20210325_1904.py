# Generated by Django 3.1.6 on 2021-03-25 19:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210324_0808'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='courseby',
            field=models.CharField(blank=True, default=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL), max_length=200, null=True),
        ),
    ]