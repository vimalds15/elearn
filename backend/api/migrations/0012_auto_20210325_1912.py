# Generated by Django 3.1.6 on 2021-03-25 19:12

import django.contrib.auth.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20210325_1911'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='courseby',
            field=models.CharField(default=django.contrib.auth.models.User, max_length=200),
        ),
    ]
