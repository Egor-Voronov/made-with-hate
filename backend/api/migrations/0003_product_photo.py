# Generated by Django 4.1.4 on 2022-12-26 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_city_options_alter_feedback_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='photo',
            field=models.CharField(default=1, max_length=500, verbose_name='Фото пользователя'),
            preserve_default=False,
        ),
    ]
