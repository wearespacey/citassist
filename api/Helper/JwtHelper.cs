using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace api.Helper
{
    public class JwtHelper : IJwtHelper
    {
        private readonly IConfiguration _config;
        public JwtHelper(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateToken()
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("t92jdk423HvzHUUsBc1hWEV63RWSv57CPWn8UNA-fy5fJwiLRbGaHTMh2W37DRIcCPW1MWwA5Ng-Cr4OpyT7uAs8Ib9H2SWg3PB4oHSuyuoBmfotoiMn8iKfoCMu_4HBNbpdqTZz3Nm855oPfoWOYkIAAyVDq7sT5RtQ0RSZ6_TsQG7F5miTRHn1xmL_-AGskKnIu-myyhqQSxZb0E6ovQrS8T17D7P4W8KL0EmDLjK0TPrrbjGuiKK5eX4CG3uXVLnA5YoXNO8pVq6NApq-sTaD9P0I3083uxfv46X8cfhAb4gZfjUdLQVE5CkjMMLQYE7_jw7T5srrnbvlXGSceQ"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken("CitAccess.com",
              "CitAccess.com",
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}