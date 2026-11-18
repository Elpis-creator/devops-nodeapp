
output "instance_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.nodeapp.public_ip
}

output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.nodeapp.id
}
