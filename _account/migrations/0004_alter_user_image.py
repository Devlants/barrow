# Generated by Django 4.1.3 on 2022-11-21 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('_account', '0003_user_keyword'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(blank=True, default='/media/img/account_default.png', null=True, upload_to='account'),
        ),
    ]
