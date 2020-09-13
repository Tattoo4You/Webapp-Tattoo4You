using System.Collections.Generic;
using beInked_vue_dotnet.Models;

namespace beInked_vue_dotnet.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
