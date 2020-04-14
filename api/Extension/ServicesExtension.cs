using api.Helper;
using Microsoft.Extensions.DependencyInjection;

namespace api.Extension
{
    public static class ServicesExtension
    {
        public static void UseHelper(this IServiceCollection service)
        {
            service.AddSingleton<IJwtHelper,JwtHelper>();
        }
    }
}