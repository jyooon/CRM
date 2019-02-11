# Generated by Django 2.1.5 on 2019-02-11 07:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_info', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reserve',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booker', models.CharField(max_length=20)),
                ('manager', models.CharField(max_length=20)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('cost', models.IntegerField()),
                ('memo', models.TextField(max_length=100)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_info.Profile')),
            ],
            options={
                'ordering': ('-name',),
            },
        ),
    ]
