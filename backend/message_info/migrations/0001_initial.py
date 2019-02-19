# Generated by Django 2.1.5 on 2019-02-19 02:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_info', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msg1', models.TextField(max_length=100)),
                ('msg2', models.TextField(max_length=100)),
                ('msg3', models.TextField(max_length=100)),
                ('msg4', models.TextField(max_length=100)),
                ('msg5', models.TextField(max_length=100)),
                ('msg6', models.TextField(max_length=100)),
                ('msg7', models.TextField(max_length=100)),
                ('msg8', models.TextField(max_length=100)),
                ('msg9', models.TextField(max_length=100)),
                ('msg10', models.TextField(max_length=100)),
                ('name', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='user_info.Profile')),
            ],
            options={
                'ordering': ('-name',),
            },
        ),
    ]
