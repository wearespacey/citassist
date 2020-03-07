using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO;
using api.DTO.Request;
using api.Helper;
using api.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SignInController : ControllerBase
    {
        private readonly IRepositoryWrapper _repository;
        private readonly IMapper _mapper;
        private readonly IJwtHelper _jwtHelper;

        public SignInController(IRepositoryWrapper repositoryWrapper, IMapper mapper, IJwtHelper jwtHelper)
        {
            _repository = repositoryWrapper;
            _mapper = mapper;
            _jwtHelper = jwtHelper;
        }

        [HttpPost]
        public async Task<ActionResult> SignIn([FromBody] SignInRequest request)
        {
            if (await _repository.Account.SignIn(request.Login, request.Password))
            {
                string token = _jwtHelper.GenerateToken();
                return Ok(new ResponseDTO { Success = true, Data = new { token } });
            }
            return BadRequest(new ResponseDTO { Success = false });
        }
    }
}
